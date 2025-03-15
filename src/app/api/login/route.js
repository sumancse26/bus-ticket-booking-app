import prisma from "@/config/prisma";
import { decryptPassword } from "@/utils/index.js";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );

    const userInfo = await prisma.users.findUnique({
      where: {
        email,
      },
      omit: {
        created_at: true,
        updated_at: true,
      },
    });

    const isValid = await decryptPassword(password, userInfo.password);

    if (!isValid)
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 }
      );

    return NextResponse.json(
      {
        success: true,
        message: "User fetched successfully",
        data: userInfo,
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
