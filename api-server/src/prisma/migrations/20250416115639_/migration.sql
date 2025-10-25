/*
  Warnings:

  - Made the column `creator_id` on table `activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `activity` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "activity" DROP CONSTRAINT "activity_category_id_fkey";

-- AlterTable
ALTER TABLE "activity" ALTER COLUMN "creator_id" SET NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "activity_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
