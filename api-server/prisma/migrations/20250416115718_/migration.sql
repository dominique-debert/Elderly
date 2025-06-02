/*
  Warnings:

  - Made the column `userId` on table `activity_log` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "activity_log" ALTER COLUMN "userId" SET NOT NULL;
