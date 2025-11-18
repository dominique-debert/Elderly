/*
  Warnings:

  - You are about to drop the column `category_id` on the `forum_topic` table. All the data in the column will be lost.
  - Added the required column `section_id` to the `forum_topic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "forum_topic" DROP CONSTRAINT "forum_topic_category_id_fkey";

-- AlterTable
ALTER TABLE "forum_topic" DROP COLUMN "category_id",
ADD COLUMN     "section_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "forum_topic" ADD CONSTRAINT "forum_topic_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "forum_section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
