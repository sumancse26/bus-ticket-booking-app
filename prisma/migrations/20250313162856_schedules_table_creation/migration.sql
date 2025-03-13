-- CreateTable
CREATE TABLE "schedules" (
    "id" SERIAL NOT NULL,
    "bus_id" INTEGER NOT NULL,
    "route_id" INTEGER NOT NULL,
    "departure_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "arrival_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "available_seats" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_bus_id_fkey" FOREIGN KEY ("bus_id") REFERENCES "buses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
