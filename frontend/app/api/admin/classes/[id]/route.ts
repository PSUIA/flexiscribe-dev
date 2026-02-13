import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { verifyAuth } from "@/lib/auth";

// DELETE /api/admin/classes/[id] — Delete a class
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(request);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const existing = await prisma.class.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Class not found" }, { status: 404 });
    }

    await prisma.class.delete({ where: { id } });

    await prisma.activity.create({
      data: {
        action: "CLASS_DELETED",
        description: `Deleted class ${existing.subject} - Section ${existing.section}`,
        userRole: "ADMIN",
        userName: "Admin",
        userId: user.userId,
      },
    });

    return NextResponse.json({ message: "Class deleted" }, { status: 200 });
  } catch (error) {
    console.error("Delete class error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

// PATCH /api/admin/classes/[id] — Update a class
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await verifyAuth(request);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { subject, section, room, day, startTime, endTime, educatorId } = body;

    const existing = await prisma.class.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Class not found" }, { status: 404 });
    }

    // If educatorId is being changed, verify it exists
    if (educatorId) {
      const educator = await prisma.educator.findUnique({
        where: { id: educatorId },
      });
      if (!educator) {
        return NextResponse.json(
          { error: "Educator not found" },
          { status: 404 }
        );
      }
    }

    const updated = await prisma.class.update({
      where: { id },
      data: {
        ...(subject && { subject }),
        ...(section && { section }),
        ...(room && { room }),
        ...(day && { day }),
        ...(startTime && { startTime }),
        ...(endTime !== undefined && { endTime }),
        ...(educatorId && { educatorId }),
      },
      include: {
        educator: { include: { department: true } },
      },
    });

    return NextResponse.json(
      {
        class: {
          ...updated,
          educatorName: updated.educator.fullName,
          department: updated.educator.department.name,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update class error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
