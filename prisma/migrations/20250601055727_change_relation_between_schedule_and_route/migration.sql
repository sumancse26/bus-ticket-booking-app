/*
  Warnings:

  - A unique constraint covering the columns `[route_id]` on the table `schedules` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "bookingType" ADD VALUE 'available';

-- CreateIndex
CREATE UNIQUE INDEX "schedules_route_id_key" ON "schedules"("route_id");
