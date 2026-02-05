import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/db";

/**
 * Get educator's transcriptions
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

    const { searchParams } = new URL(request.url);
    const course = searchParams.get("course");

    const transcriptions = await prisma.transcription.findMany({
      where: {
        educatorId: educator.id,
        ...(course && { course }),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ transcriptions }, { status: 200 });
  } catch (error) {
    console.error("Get educator transcriptions error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}

/**
 * Create a new transcription
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

    const { title, course, date, duration, content, rawText } =
      await request.json();

    const transcription = await prisma.transcription.create({
      data: {
        title,
        course,
        date,
        duration,
        content,
        rawText,
        educatorId: educator.id,
      },
    });

    return NextResponse.json({ transcription }, { status: 201 });
  } catch (error) {
    console.error("Create transcription error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
