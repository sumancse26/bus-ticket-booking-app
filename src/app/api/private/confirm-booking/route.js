import prisma from "@/config/prisma";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const reqEmail = req.headers.get("email");
    const user_id = Number(req.headers.get("user_id"));

    if (!reqEmail || !user_id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized user" },
        { status: 401 }
      );
    }

    const reqData = await req.json();

    const bookingInfo = await prisma.booking.findFirst({
      where: {
        NOT: {
          seat_number: reqData.seat_number,
          bus_schedule_id: reqData.bus_schedule_id,
        },
      },
    });

    if (
      bookingInfo &&
      bookingInfo.status?.toLocaleLowerCase() !== "available"
    ) {
      return NextResponse.json(
        { success: false, message: "Seat is not available" },
        { status: 400 }
      );
    }

    if (!reqData.bus_schedule_id || !reqData.seat_number) {
      return NextResponse.json(
        { success: false, message: "Select a bus" },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        user_id: user_id,
        bus_schedule_id: reqData.bus_schedule_id,
        seat_number: reqData.seat_number,
        status: "pending",
      },
    });

    return NextResponse.json(
      { success: true, message: "Booking is pending", booking_id: booking.id },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
