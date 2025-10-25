/*
  Warnings:

  - You are about to drop the column `gps_coordinates` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "gps_coordinates",
ADD COLUMN     "latitude" TEXT,
ADD COLUMN     "longitude" TEXT;
