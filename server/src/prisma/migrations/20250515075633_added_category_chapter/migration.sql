/*
  Warnings:

  - You are about to drop the column `typeId` on the `category` table. All the data in the column will be lost.
  - Added the required column `chapterId` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_typeId_fkey";

-- DropIndex
DROP INDEX "category_typeId_idx";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "typeId",
ADD COLUMN     "categoryChapterId" INTEGER,
ADD COLUMN     "categoryTypeId" INTEGER,
ADD COLUMN     "chapterId" INTEGER NOT NULL,
ADD COLUMN     "type_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "category_chapter" (
    "id" SERIAL NOT NULL,
    "chapter_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_chapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_chapter_chapter_id_key" ON "category_chapter"("chapter_id");

-- CreateIndex
CREATE UNIQUE INDEX "category_chapter_name_key" ON "category_chapter"("name");

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_categoryTypeId_fkey" FOREIGN KEY ("categoryTypeId") REFERENCES "category_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_categoryChapterId_fkey" FOREIGN KEY ("categoryChapterId") REFERENCES "category_chapter"("chapter_id") ON DELETE SET NULL ON UPDATE CASCADE;
