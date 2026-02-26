import { NextRequest, NextResponse } from 'next/server';
import { generateQuizWithGemma, checkOllamaAvailability } from '@/lib/ollama';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, type, difficulty, count } = body;

    // Validation
    if (!content || !type || !difficulty || !count) {
      return NextResponse.json(
        { error: 'Missing required fields: content, type, difficulty, count' },
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

    if (!content.trim()) {
      return NextResponse.json(
        { error: 'Content cannot be empty' },
        { status: 400 }
      );
    }

    // Check if Ollama is available
    const isOllamaAvailable = await checkOllamaAvailability();
    if (!isOllamaAvailable) {
      return NextResponse.json(
        { error: 'Ollama service is not available. Please ensure Ollama is running with: ollama serve' },
        { status: 503 }
      );
    }

    // Generate quiz using Gemma 3 1B
    console.log(`Generating ${type} quiz with ${count} questions at ${difficulty} difficulty...`);
    const generatedQuiz = await generateQuizWithGemma(
      content,
      type as 'MCQ' | 'FILL_IN_BLANK' | 'FLASHCARD',
      difficulty as 'EASY' | 'MEDIUM' | 'HARD',
      count
    );

    return NextResponse.json({
      success: true,
      quiz: {
        type: generatedQuiz.type,
        difficulty: generatedQuiz.difficulty,
        totalQuestions: generatedQuiz.items.length,
        questions: generatedQuiz.items,
        rejectedItems: generatedQuiz.rejectedItems || [],
        stats: generatedQuiz.stats || {
          requested: count,
          generated: generatedQuiz.items.length,
          rejected: generatedQuiz.rejectedItems?.length || 0,
          attempts: 0
        }
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
