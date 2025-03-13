-- CreateEnum
CREATE TYPE "bookingType" AS ENUM ('pending', 'confirmed', 'cancelled');

-- CreateTable
CREATE TABLE "booking" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bus_schedule_id" INTEGER NOT NULL,
    "seat_number" TEXT NOT NULL,
    "status" "bookingType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_bus_schedule_id_fkey" FOREIGN KEY ("bus_schedule_id") REFERENCES "schedules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
