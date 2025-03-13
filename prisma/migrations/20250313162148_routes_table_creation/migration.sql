-- CreateTable
CREATE TABLE "routes" (
    "id" SERIAL NOT NULL,
    "start_location" TEXT NOT NULL,
    "end_location" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);
