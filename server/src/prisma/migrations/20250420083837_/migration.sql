/*
  Warnings:

  - Made the column `rating` on table `service_rating` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "service_rating" ALTER COLUMN "rating" SET NOT NULL;
