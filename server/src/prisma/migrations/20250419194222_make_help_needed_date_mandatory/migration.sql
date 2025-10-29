/*
  Warnings:

  - Made the column `needed_date` on table `help_request` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "help_request" ALTER COLUMN "needed_date" SET NOT NULL;
