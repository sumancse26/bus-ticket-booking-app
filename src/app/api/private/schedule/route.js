import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { searchParams } = new URL(req.url);

    const startLocation = searchParams.get("start_location");
    const endLocation = searchParams.get("end_location");

    const whereConditions =
      startLocation && endLocation
        ? { start_location: startLocation, end_location: endLocation }
        : {};

    const schedules = await prisma.routes.findMany({
      where: whereConditions,
      select: {
        id: true,
        start_location: true,
        end_location: true,
        schedules: {
          select: {
            id: true,
            departure_time: true,
            arrival_time: true,
            available_seats: true,
            price: true,
            buses: {
              select: {
                id: true,
                bus_no: true,
                bus_name: true,
                bus_type: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Schedules fetched successfully",
        data: schedules,
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
