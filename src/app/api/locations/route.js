import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

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
