import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const {
      bus_id,
      route_id,
      departure_time,
      arrival_time,
      available_seats,
      price,
    } = await req.json();
    const departureTime = new Date(departure_time)?.toISOString();
    const arrivalTime = new Date(arrival_time)?.toISOString();
    await prisma.schedules.create({
      data: {
        bus_id,
        route_id,
        departure_time: departureTime,
        arrival_time: arrivalTime,
        available_seats,
        price,
      },
    });

    return NextResponse.json(
      { success: true, message: "Schedule created successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

export const GET = async (req, { params }) => {
  try {
    const { searchParams } = req.nextUrl;

    const startLocation = searchParams.get("start_location");
    const endLocation = searchParams.get("end_location");

    const schedules = await prisma.routes.findMany({
      where: {
        start_location: startLocation,
        end_location: endLocation,
      },
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
