import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Fetch all students ordered by XP descending
    const students = await prisma.student.findMany({
      select: {
        id: true,
        studentNumber: true,
        username: true,
        fullName: true,
        xp: true,
        avatar: true,
      },
      orderBy: {
        xp: 'desc',
      },
    });

    // Add rank to each student
    const leaderboard = students.map((student, index) => ({
      ...student,
      rank: index + 1,
    }));

    return NextResponse.json({ leaderboard });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}
