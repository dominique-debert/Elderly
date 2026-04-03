/*
  Warnings:

  - You are about to drop the column `gps_coordinates` on the `activity` table. All the data in the column will be lost.
  - You are about to alter the column `cost` on the `activity` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "activity" DROP COLUMN "gps_coordinates",
ADD COLUMN     "latitude" TEXT,
ADD COLUMN     "longitude" TEXT,
ALTER COLUMN "cost" SET DEFAULT 0.00,
ALTER COLUMN "cost" SET DATA TYPE DECIMAL(10,2);
