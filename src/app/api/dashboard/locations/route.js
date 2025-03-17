import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const locationData = await req.json();

    if (!Array.isArray(locationData))
      return NextResponse.json(
        { success: false, message: "Invalid json format" },
        { status: 400 }
      );

    const locationInfo = await prisma.locations.createMany({
      data: locationData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Location created successfully",
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
    const locationsInfo = await prisma.locations.findMany({
      omit: {
        created_at: true,
        updated_at: true,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Locations fetched successfully",
        data: locationsInfo,
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
