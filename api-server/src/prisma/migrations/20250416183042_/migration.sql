/*
  Warnings:

  - You are about to drop the column `creation_date` on the `conversation` table. All the data in the column will be lost.
  - The primary key for the `conversation_participant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `creation_date` on the `forum_message` table. All the data in the column will be lost.
  - You are about to drop the column `modification_date` on the `forum_message` table. All the data in the column will be lost.
  - The required column `id` was added to the `conversation_participant` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `topic_id` on table `forum_message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `author_id` on table `forum_message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "conversation" DROP COLUMN "creation_date";

-- AlterTable
ALTER TABLE "conversation_participant" DROP CONSTRAINT "conversation_participant_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "conversation_participant_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "exercise_program" ALTER COLUMN "adapted_for_reduced_mobility" DROP NOT NULL;

-- AlterTable
ALTER TABLE "forum_category" ALTER COLUMN "parent_category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "forum_message" DROP COLUMN "creation_date",
DROP COLUMN "modification_date",
ALTER COLUMN "topic_id" SET NOT NULL,
ALTER COLUMN "author_id" SET NOT NULL;
