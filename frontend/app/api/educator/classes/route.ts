import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/db";

/**
 * Get educator's classes
 */
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    if (user.role !== "EDUCATOR") {
      return NextResponse.json(
        { error: "Unauthorized. Educator access only." },
        { status: 403 }
      );
    }

    const educator = await prisma.educator.findUnique({
      where: { userId: user.userId },
    });

    if (!educator) {
      return NextResponse.json(
        { error: "Educator profile not found" },
        { status: 404 }
      );
    }

    const classes = await prisma.class.findMany({
      where: { educatorId: educator.id },
      orderBy: [{ day: "asc" }, { startTime: "asc" }],
    });

    return NextResponse.json({ classes }, { status: 200 });
  } catch (error) {
    console.error("Get educator classes error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}

/**
 * Create a new class
 */
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    if (user.role !== "EDUCATOR") {
      return NextResponse.json(
        { error: "Unauthorized. Educator access only." },
        { status: 403 }
      );
    }

    const educator = await prisma.educator.findUnique({
      where: { userId: user.userId },
    });

    if (!educator) {
      return NextResponse.json(
        { error: "Educator profile not found" },
        { status: 404 }
      );
    }

    const { subject, section, room, day, startTime, endTime, students } =
      await request.json();

    const newClass = await prisma.class.create({
      data: {
        subject,
        section,
        room,
        day,
        startTime,
        endTime,
        students: students || 0,
        educatorId: educator.id,
      },
    });

    return NextResponse.json({ class: newClass }, { status: 201 });
  } catch (error) {
    console.error("Create class error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
