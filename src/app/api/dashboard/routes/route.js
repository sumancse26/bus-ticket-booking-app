import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const routeData = await req.json();

    if (!Array.isArray(routeData))
      return NextResponse.json(
        { success: false, message: "Invalid json format" },
        { status: 400 }
      );

    const routeInfo = await prisma.routes.createMany({
      data: routeData,
    });

    return NextResponse.json(
      { success: true, message: "Route created successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  try {
    const routesInfo = await prisma.routes.findMany({
      omit: {
        created_at: true,
        updated_at: true,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Routes fetched successfully",
        data: routesInfo,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
