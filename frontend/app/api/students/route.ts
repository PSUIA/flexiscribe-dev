import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      studentNumber,
      yearLevel,
      section,
      program,
      dateOfBirth,
      gender,
      email,
      password,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !studentNumber ||
      !yearLevel ||
      !section ||
      !program ||
      !dateOfBirth ||
      !gender ||
      !email ||
      !password
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Validate student number format
    if (studentNumber.length < 7) {
      return NextResponse.json(
        { error: "Invalid student number format" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Check if student number already exists
    const existingStudentByNumber = await prisma.student.findUnique({
      where: { studentNumber },
    });

    if (existingStudentByNumber) {
      return NextResponse.json(
        { error: "Student number already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Convert gender string to enum value
    const genderEnum = gender.toUpperCase().replace(/\s+/g, "_");

    // Create user and student in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          role: "STUDENT",
        },
      });

      // Create student profile
      const student = await tx.student.create({
        data: {
          studentNumber,
          fullName,
          yearLevel,
          section,
          program,
          gender: genderEnum as any,
          birthDate: new Date(dateOfBirth),
          userId: user.id,
        },
      });

      return { user, student };
    });

    return NextResponse.json(
      {
        message: "Student registered successfully",
        student: {
          id: result.student.id,
          studentNumber: result.student.studentNumber,
          fullName: result.student.fullName,
          email: result.user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
