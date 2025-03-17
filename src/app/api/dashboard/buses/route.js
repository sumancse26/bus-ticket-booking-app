import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const busData = await req.json();

    if (!Array.isArray(busData))
      return NextResponse.json(
        { success: false, message: "Invalid json format" },
        { status: 400 }
      );

    const isValid = busData.some(
      ({ bus_no, bus_name, bus_type, total_seats, operator_id }) =>
        !bus_no || !bus_name || !bus_type || !total_seats || !operator_id
    );

    if (isValid)
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );

    const busInfo = await prisma.buses.createMany({
      data: busData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Bus created successfully",
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
