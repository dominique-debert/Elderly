/*
  Warnings:

  - You are about to drop the column `name` on the `category_chapter` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chapter_name]` on the table `category_chapter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chapter_name` to the `category_chapter` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "category_chapter_name_key";

-- AlterTable
ALTER TABLE "category_chapter" DROP COLUMN "name",
ADD COLUMN     "chapter_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "category_chapter_chapter_name_key" ON "category_chapter"("chapter_name");
