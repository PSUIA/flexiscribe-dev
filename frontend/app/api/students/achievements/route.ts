import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== 'STUDENT') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const student = await prisma.student.findUnique({
      where: { userId: currentUser.userId },
      select: { id: true, xp: true },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // Fetch all achievements
    const allAchievements = await prisma.achievement.findMany({
      orderBy: { xpRequired: 'asc' },
    });

    // Fetch student's earned achievements
    const earnedAchievements = await prisma.studentAchievement.findMany({
      where: { studentId: student.id },
      include: { achievement: true },
    });

    const earnedAchievementIds = new Set(
      earnedAchievements.map((sa) => sa.achievementId)
    );

    // Auto-award achievements based on XP if not already earned
    for (const achievement of allAchievements) {
      if (student.xp >= achievement.xpRequired && !earnedAchievementIds.has(achievement.id)) {
        try {
          await prisma.studentAchievement.create({
            data: {
              studentId: student.id,
              achievementId: achievement.id,
            },
          });
          earnedAchievementIds.add(achievement.id);
        } catch (error) {
          // Ignore duplicate errors
          console.log('Achievement already awarded:', achievement.title);
        }
      }
    }

    // Map achievements with earned status
    const achievements = allAchievements.map((achievement) => {
      const earnedAchievement = earnedAchievements.find((sa) => sa.achievementId === achievement.id);
      const isEarned = earnedAchievementIds.has(achievement.id) || student.xp >= achievement.xpRequired;
      return {
        id: achievement.id,
        name: achievement.title,
        title: achievement.title,
        description: achievement.description,
        icon: achievement.icon,
        category: achievement.category,
        rarity: achievement.category,
        xpRequired: achievement.xpRequired,
        earned: isEarned,
        earnedDate: earnedAchievement?.earnedAt
          ? new Date(earnedAchievement.earnedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : null,
      };
    });

    return NextResponse.json({ achievements });
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch achievements' },
      { status: 500 }
    );
  }
}
