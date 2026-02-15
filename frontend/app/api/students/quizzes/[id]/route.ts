import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

// XP awarded per correct answer based on difficulty
const XP_PER_CORRECT: Record<string, number> = {
  EASY: 5,
  MEDIUM: 10,
  HARD: 15,
};

// Flat XP for completing a flashcard review
const FLASHCARD_COMPLETION_XP = 10;

// Map DB quiz type enum to display-friendly label
function mapQuizType(type: string): string {
  switch (type) {
    case 'MCQ': return 'MCQ';
    case 'FILL_IN_BLANK': return 'Fill-in';
    case 'FLASHCARD': return 'Flashcard';
    default: return type;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const { id: quizId } = await params;

    // Fetch quiz with questions and lesson info
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        lesson: {
          select: {
            title: true,
            subject: true,
          },
        },
        questions: {
          orderBy: {
            orderIndex: 'asc',
          },
        },
      },
    });

    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
    }

    const displayType = mapQuizType(quiz.type);

    // Transform questions to the format expected by the quiz components
    const transformedQuestions = quiz.questions.map((q, index) => {
      const data = q.questionData as any;

      switch (quiz.type) {
        case 'MCQ':
          return {
            id: index + 1,
            question: data.question || q.questionText,
            options: data.options || data.choices || [],
            correctAnswer: typeof data.correctAnswer === 'number'
              ? data.correctAnswer
              : (data.options || data.choices || []).indexOf(data.answer || data.correctAnswer),
            hint: data.hint || 'No hint available.',
          };

        case 'FILL_IN_BLANK':
          // The sentence has [blank] markers; convert to __________
          const sentence = (data.sentence || q.questionText || '').replace(/\[blank\]/gi, '__________');
          return {
            id: index + 1,
            question: sentence,
            correctAnswer: data.answer || data.correctAnswer || '',
            hint: data.hint || 'No hint available.',
          };

        case 'FLASHCARD':
          return {
            id: index + 1,
            front: data.front || q.questionText,
            back: data.back || '',
            hint: data.hint || 'No hint available.',
          };

        default:
          return {
            id: index + 1,
            question: q.questionText,
            hint: data.hint || 'No hint available.',
          };
      }
    });

    return NextResponse.json({
      success: true,
      quiz: {
        id: quiz.id,
        lesson: quiz.lesson.title,
        subject: quiz.lesson.subject,
        quizType: displayType,
        numQuestions: quiz.totalQuestions,
        difficulty: quiz.difficulty,
      },
      questions: {
        quizType: displayType,
        questions: transformedQuestions,
      },
    });
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch quiz', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/students/quizzes/[id]
 * Submit a quiz attempt – calculates score, awards XP, persists QuizAttempt.
 *
 * Body: { answers: Record<string, any> }
 *   MCQ      → { "0": 2, "1": 0, ... }          (index of chosen option)
 *   FILL_IN  → { "0": "polymorphism", ... }      (text answer)
 *   FLASHCARD → {} (no scoring – flat XP)
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    if (user.role !== 'STUDENT') {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const { id: quizId } = await params;
    const body = await request.json();
    const submittedAnswers: Record<string, any> = body.answers ?? {};

    // Get the student record
    const student = await prisma.student.findUnique({
      where: { userId: user.userId as string },
    });
    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // Fetch quiz + questions
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: { orderBy: { orderIndex: 'asc' } },
        lesson: { select: { title: true, subject: true } },
      },
    });
    if (!quiz) {
      return NextResponse.json({ error: 'Quiz not found' }, { status: 404 });
    }

    const totalQuestions = quiz.questions.length;
    let correctCount = 0;

    // ----- Score calculation per quiz type -----
    if (quiz.type === 'FLASHCARD') {
      // Flashcards have no right/wrong – award flat XP
      correctCount = totalQuestions; // treat all as "completed"
    } else {
      quiz.questions.forEach((q, index) => {
        const data = q.questionData as any;
        const userAnswer = submittedAnswers[String(index)];

        if (userAnswer === undefined || userAnswer === null) return; // unanswered

        if (quiz.type === 'MCQ') {
          // correctAnswer is the index of the right option
          const correctIndex =
            typeof data.correctAnswer === 'number'
              ? data.correctAnswer
              : (data.options || data.choices || []).indexOf(data.answer || data.correctAnswer);
          if (Number(userAnswer) === correctIndex) {
            correctCount++;
          }
        } else if (quiz.type === 'FILL_IN_BLANK') {
          const correctText = (data.answer || data.correctAnswer || '').toString().trim().toLowerCase();
          const userText = userAnswer.toString().trim().toLowerCase();
          if (userText === correctText) {
            correctCount++;
          }
        }
      });
    }

    // ----- XP calculation -----
    const baseXpPerCorrect = XP_PER_CORRECT[quiz.difficulty] ?? XP_PER_CORRECT.MEDIUM;
    let xpEarned: number;

    if (quiz.type === 'FLASHCARD') {
      xpEarned = FLASHCARD_COMPLETION_XP;
    } else {
      xpEarned = correctCount * baseXpPerCorrect;
    }

    // Create the quiz attempt
    const attempt = await prisma.quizAttempt.create({
      data: {
        quizId: quiz.id,
        studentId: student.id,
        score: correctCount,
        totalQuestions,
        answers: submittedAnswers,
      },
    });

    // Award XP to the student
    await prisma.student.update({
      where: { id: student.id },
      data: { xp: { increment: xpEarned } },
    });

    const newXp = student.xp + xpEarned;

    return NextResponse.json({
      success: true,
      attempt: {
        id: attempt.id,
        score: correctCount,
        totalQuestions,
        accuracy: Math.round((correctCount / totalQuestions) * 100),
        xpEarned,
        newXp,
      },
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit quiz', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
