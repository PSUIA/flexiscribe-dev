/**
 * Sample seed script for educator data
 * Run with: node prisma/seed-educator.js
 * 
 * This script demonstrates how to populate Class and Transcription data
 * for testing the educator API integration.
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding educator data...');

  // Find an existing educator (you may need to adjust this query)
  const educator = await prisma.educator.findFirst({
    include: { user: true },
  });

  if (!educator) {
    console.log('No educator found. Please create an educator account first.');
    return;
  }

  console.log(`Found educator: ${educator.fullName}`);

  // Create sample classes
  const classes = await Promise.all([
    prisma.class.create({
      data: {
        subject: 'CPP116',
        section: 'A',
        room: '108',
        day: 'Monday',
        startTime: '9:00 AM',
        endTime: '10:30 AM',
        students: 51,
        educatorId: educator.id,
      },
    }),
    prisma.class.create({
      data: {
        subject: 'CPP116',
        section: 'B',
        room: '107',
        day: 'Wednesday',
        startTime: '7:30 AM',
        endTime: '9:00 AM',
        students: 53,
        educatorId: educator.id,
      },
    }),
    prisma.class.create({
      data: {
        subject: 'CPP117',
        section: 'A',
        room: '109',
        day: 'Tuesday',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        students: 53,
        educatorId: educator.id,
      },
    }),
    prisma.class.create({
      data: {
        subject: 'CPP117',
        section: 'B',
        room: '108',
        day: 'Thursday',
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        students: 51,
        educatorId: educator.id,
      },
    }),
  ]);

  console.log(`Created ${classes.length} classes`);

  // Create sample transcriptions
  const transcriptions = await Promise.all([
    prisma.transcription.create({
      data: {
        title: 'Lecture 1: Introduction to Programming',
        course: 'CPP116',
        date: 'Feb 1, 2026',
        duration: '1h 15m',
        content: 'This is the formatted transcript content for Lecture 1...',
        rawText: 'Raw transcript text for Lecture 1...',
        educatorId: educator.id,
      },
    }),
    prisma.transcription.create({
      data: {
        title: 'Lecture 2: Variables and Data Types',
        course: 'CPP116',
        date: 'Feb 3, 2026',
        duration: '1h 20m',
        content: 'This is the formatted transcript content for Lecture 2...',
        rawText: 'Raw transcript text for Lecture 2...',
        educatorId: educator.id,
      },
    }),
    prisma.transcription.create({
      data: {
        title: 'Lecture 1: Advanced C++ Concepts',
        course: 'CPP117',
        date: 'Feb 2, 2026',
        duration: '1h 25m',
        content: 'This is the formatted transcript content for CPP117 Lecture 1...',
        rawText: 'Raw transcript text for CPP117 Lecture 1...',
        educatorId: educator.id,
      },
    }),
    prisma.transcription.create({
      data: {
        title: 'Lecture 2: Object-Oriented Programming',
        course: 'CPP117',
        date: 'Feb 4, 2026',
        duration: '1h 30m',
        content: 'This is the formatted transcript content for CPP117 Lecture 2...',
        rawText: 'Raw transcript text for CPP117 Lecture 2...',
        educatorId: educator.id,
      },
    }),
  ]);

  console.log(`Created ${transcriptions.length} transcriptions`);
  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
