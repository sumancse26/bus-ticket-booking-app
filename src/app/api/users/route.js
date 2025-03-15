import prisma from "@/config/prisma.js";
import { encryptPassword } from "@/utils/index.js";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { name, email, password, phone } = await req.json();

    if (!name || !email || !password || !phone)
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );

    const hashedPassword = await encryptPassword(password);

    const userInfo = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        role: "driver",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    const users = await prisma.users.findMany({
      omit: {
        password: true,
        created_at: true,
        updated_at: true,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Users fetched successfully",
        data: users,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
};
