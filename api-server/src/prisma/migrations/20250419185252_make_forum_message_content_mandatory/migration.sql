/*
  Warnings:

  - Made the column `content` on table `forum_message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "forum_message" ALTER COLUMN "content" SET NOT NULL;
