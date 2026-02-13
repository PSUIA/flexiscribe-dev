import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";
import crypto from "crypto";

function generateClassCode(): string {
  return crypto.randomBytes(3).toString("hex").toUpperCase(); // e.g. "A3F1B2"
}

// GET /api/admin/classes — List all classes with educator info
export async function GET(request: Request) {
  try {
    const user = await verifyAuth(request);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const classes = await prisma.class.findMany({
      include: {
        educator: {
          include: { department: true },
        },
        _count: { select: { enrollments: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const transformed = classes.map((c) => ({
      id: c.id,
      classCode: c.classCode,
      subject: c.subject,
      section: c.section,
      room: c.room,
      day: c.day,
      startTime: c.startTime,
      endTime: c.endTime,
      educatorId: c.educatorId,
      educatorName: c.educator.fullName,
      department: c.educator.department.name,
      enrolledStudents: c._count.enrollments,
      createdAt: c.createdAt,
    }));

    return NextResponse.json({ classes: transformed }, { status: 200 });
  } catch (error) {
    console.error("Get classes error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}

// POST /api/admin/classes — Create a class and assign an educator
export async function POST(request: Request) {
  try {
    const user = await verifyAuth(request);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { subject, section, room, day, startTime, endTime, educatorId } = body;

    if (!subject || !section || !room || !day || !startTime || !educatorId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify educator exists
    const educator = await prisma.educator.findUnique({
      where: { id: educatorId },
    });

    if (!educator) {
      return NextResponse.json(
        { error: "Educator not found" },
        { status: 404 }
      );
    }

    const classCode = generateClassCode();

    const newClass = await prisma.class.create({
      data: {
        classCode,
        subject,
        section,
        room,
        day,
        startTime,
        endTime: endTime || null,
        educatorId,
      },
      include: {
        educator: { include: { department: true } },
      },
    });

    // Log activity
    await prisma.activity.create({
      data: {
        action: "CLASS_CREATED",
        description: `Created class ${subject} - Section ${section} assigned to ${educator.fullName}`,
        userRole: "ADMIN",
        userName: "Admin",
        userId: user.userId,
      },
    });

    return NextResponse.json(
      {
        class: {
          ...newClass,
          educatorName: newClass.educator.fullName,
          department: newClass.educator.department.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create class error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
