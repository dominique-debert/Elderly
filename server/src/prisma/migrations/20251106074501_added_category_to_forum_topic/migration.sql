/*
  Warnings:

  - You are about to drop the `forum_category` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `category_id` on the `forum_topic` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "forum_topic" DROP CONSTRAINT "forum_topic_category_id_fkey";

-- AlterTable
ALTER TABLE "forum_topic" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "forum_category";

-- AddForeignKey
ALTER TABLE "forum_topic" ADD CONSTRAINT "forum_topic_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
