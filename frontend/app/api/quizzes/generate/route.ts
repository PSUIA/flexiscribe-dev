import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateQuizWithGemma, checkOllamaAvailability } from '@/lib/ollama';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, type, difficulty, count } = body;

    // Validation
    if (!lessonId || !type || !difficulty || !count) {
      return NextResponse.json(
        { error: 'Missing required fields: lessonId, type, difficulty, count' },
        { status: 400 }
      );
    }

    const validTypes = ['MCQ', 'FILL_IN_BLANK', 'FLASHCARD'];
    const validDifficulties = ['EASY', 'MEDIUM', 'HARD'];

    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }

    if (!validDifficulties.includes(difficulty)) {
      return NextResponse.json(
        { error: `Invalid difficulty. Must be one of: ${validDifficulties.join(', ')}` },
        { status: 400 }
      );
    }

    if (typeof count !== 'number' || count < 1 || count > 50) {
      return NextResponse.json(
        { error: 'Count must be a number between 1 and 50' },
        { status: 400 }
      );
    }

    // Check if Ollama is available
    const isOllamaAvailable = await checkOllamaAvailability();
    if (!isOllamaAvailable) {
      return NextResponse.json(
        { error: 'Ollama service is not available. Please ensure Ollama is running.' },
        { status: 503 }
      );
    }

    // Fetch the lesson
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
    });

    if (!lesson) {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      );
    }

    // Generate quiz using Gemma 3 1B
    console.log(`Generating ${type} quiz with ${count} questions at ${difficulty} difficulty...`);
    const generatedQuiz = await generateQuizWithGemma(
      lesson.content,
      type as 'MCQ' | 'FILL_IN_BLANK' | 'FLASHCARD',
      difficulty as 'EASY' | 'MEDIUM' | 'HARD',
      count
    );

    // Save quiz to database
    const quiz = await prisma.quiz.create({
      data: {
        lessonId,
        type,
        difficulty,
        totalQuestions: generatedQuiz.items.length,
        questions: {
          create: generatedQuiz.items.map((item: any, index: number) => ({
            questionText: item.question || item.sentence || item.front || '',
            questionData: item,
            orderIndex: index,
          })),
        },
      },
      include: {
        questions: true,
        lesson: {
          select: {
            title: true,
            subject: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      quiz: {
        id: quiz.id,
        type: quiz.type,
        difficulty: quiz.difficulty,
        totalQuestions: quiz.totalQuestions,
        lessonTitle: quiz.lesson.title,
        subject: quiz.lesson.subject,
        questions: quiz.questions.map(q => ({
          id: q.id,
          questionText: q.questionText,
          data: q.questionData,
        })),
      },
    });
  } catch (error) {
    console.error('Error generating quiz:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate quiz',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve available lessons
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get('subject');

    const where = subject ? { subject } : {};

    const lessons = await prisma.lesson.findMany({
      where,
      select: {
        id: true,
        title: true,
        subject: true,
        createdAt: true,
        _count: {
          select: {
            quizzes: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      lessons: lessons.map(l => ({
        id: l.id,
        title: l.title,
        subject: l.subject,
        createdAt: l.createdAt,
        quizCount: l._count.quizzes,
      })),
    });
  } catch (error) {
    console.error('Error fetching lessons:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch lessons',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
