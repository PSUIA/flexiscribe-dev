import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

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
