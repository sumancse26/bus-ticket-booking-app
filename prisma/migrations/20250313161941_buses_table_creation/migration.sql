-- CreateEnum
CREATE TYPE "busType" AS ENUM ('AC', 'Non_AC', 'Sleeper', 'Luxury');

-- CreateTable
CREATE TABLE "buses" (
    "id" SERIAL NOT NULL,
    "bus_no" TEXT NOT NULL,
    "bus_name" TEXT NOT NULL,
    "bus_type" "busType" NOT NULL,
    "total_seats" INTEGER NOT NULL,
    "operator_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "buses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "buses_bus_no_key" ON "buses"("bus_no");

-- AddForeignKey
ALTER TABLE "buses" ADD CONSTRAINT "buses_operator_id_fkey" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
