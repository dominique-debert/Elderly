/*
  Warnings:

  - You are about to drop the column `categoryChapterId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `categoryTypeId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_categoryChapterId_fkey";

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_categoryTypeId_fkey";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "categoryChapterId",
DROP COLUMN "categoryTypeId";

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "category_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "category_chapter"("chapter_id") ON DELETE RESTRICT ON UPDATE CASCADE;
