/*
  Warnings:

  - Made the column `category_id` on table `wellness_goal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "wellness_goal" DROP CONSTRAINT "wellness_goal_category_id_fkey";

-- AlterTable
ALTER TABLE "wellness_goal" ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "wellness_goal" ADD CONSTRAINT "wellness_goal_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "wellness_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
