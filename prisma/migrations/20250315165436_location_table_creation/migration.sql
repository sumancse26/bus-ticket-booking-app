/*
  Warnings:

  - You are about to drop the column `coountry` on the `locations` table. All the data in the column will be lost.
  - Added the required column `country` to the `locations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "locations" DROP COLUMN "coountry",
ADD COLUMN     "country" TEXT NOT NULL;
