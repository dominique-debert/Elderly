/*
  Warnings:

  - You are about to drop the `_categoryTocategoryChapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_categoryTocategoryType` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `categoryChapterId` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryTypeId` on table `category` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_categoryTocategoryChapter" DROP CONSTRAINT "_categoryTocategoryChapter_A_fkey";

-- DropForeignKey
ALTER TABLE "_categoryTocategoryChapter" DROP CONSTRAINT "_categoryTocategoryChapter_B_fkey";

-- DropForeignKey
ALTER TABLE "_categoryTocategoryType" DROP CONSTRAINT "_categoryTocategoryType_A_fkey";

-- DropForeignKey
ALTER TABLE "_categoryTocategoryType" DROP CONSTRAINT "_categoryTocategoryType_B_fkey";

-- AlterTable
ALTER TABLE "category" ALTER COLUMN "categoryChapterId" SET NOT NULL,
ALTER COLUMN "categoryTypeId" SET NOT NULL;

-- DropTable
DROP TABLE "_categoryTocategoryChapter";

-- DropTable
DROP TABLE "_categoryTocategoryType";

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_categoryTypeId_fkey" FOREIGN KEY ("categoryTypeId") REFERENCES "category_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_categoryChapterId_fkey" FOREIGN KEY ("categoryChapterId") REFERENCES "category_chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
