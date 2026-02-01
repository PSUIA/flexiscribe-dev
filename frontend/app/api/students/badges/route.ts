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

    // Fetch all badges
    const allBadges = await prisma.badge.findMany({
      orderBy: { xpRequired: 'asc' },
    });

    // Fetch student's earned badges
    const earnedBadges = await prisma.studentBadge.findMany({
      where: { studentId: student.id },
      include: { badge: true },
    });

    const earnedBadgeIds = new Set(earnedBadges.map((sb) => sb.badgeId));

    // Auto-award badges based on XP if not already earned
    for (const badge of allBadges) {
      if (student.xp >= badge.xpRequired && !earnedBadgeIds.has(badge.id)) {
        try {
          await prisma.studentBadge.create({
            data: {
              studentId: student.id,
              badgeId: badge.id,
            },
          });
          earnedBadgeIds.add(badge.id);
        } catch (error) {
          // Ignore duplicate errors
          console.log('Badge already awarded:', badge.title);
        }
      }
    }

    // Map badges with earned status
    const badges = allBadges.map((badge) => {
      const earnedBadge = earnedBadges.find((sb) => sb.badgeId === badge.id);
      const isEarned = earnedBadgeIds.has(badge.id) || student.xp >= badge.xpRequired;
      return {
        id: badge.id,
        name: badge.title,
        title: badge.title,
        description: badge.description,
        icon: badge.icon,
        xpRequired: badge.xpRequired,
        earned: isEarned,
        earnedDate: earnedBadge?.earnedAt
          ? new Date(earnedBadge.earnedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : null,
      };
    });

    return NextResponse.json({ badges });
  } catch (error) {
    console.error('Error fetching badges:', error);
    return NextResponse.json(
      { error: 'Failed to fetch badges' },
      { status: 500 }
    );
  }
}
