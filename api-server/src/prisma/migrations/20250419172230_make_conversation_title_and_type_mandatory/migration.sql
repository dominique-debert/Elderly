/*
  Warnings:

  - Made the column `type` on table `conversation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `conversation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "conversation" ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL;
