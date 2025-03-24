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
