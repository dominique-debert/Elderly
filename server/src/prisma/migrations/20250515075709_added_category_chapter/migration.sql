/*
  Warnings:

  - You are about to drop the column `chapterId` on the `category` table. All the data in the column will be lost.
  - Added the required column `chapter_id` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "chapterId",
ADD COLUMN     "chapter_id" INTEGER NOT NULL;
