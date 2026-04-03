/*
  Warnings:

  - Added the required column `author_id` to the `forum_section` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "forum_topic" DROP CONSTRAINT "forum_topic_author_id_fkey";

-- AlterTable
ALTER TABLE "forum_section" ADD COLUMN     "author_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "forum_topic" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "forum_section" ADD CONSTRAINT "forum_section_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "forum_topic" ADD CONSTRAINT "forum_topic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
