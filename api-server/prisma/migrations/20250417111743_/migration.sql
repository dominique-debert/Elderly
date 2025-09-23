/*
  Warnings:

  - You are about to drop the column `creation_date` on the `forum_topic` table. All the data in the column will be lost.
  - You are about to drop the column `creation_date` on the `help_request` table. All the data in the column will be lost.
  - Made the column `category_id` on table `forum_topic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `health_indicator` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "activity" ALTER COLUMN "title" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "forum_topic" DROP COLUMN "creation_date",
ALTER COLUMN "category_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "health_indicator" ALTER COLUMN "user_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "help_request" DROP COLUMN "creation_date";
