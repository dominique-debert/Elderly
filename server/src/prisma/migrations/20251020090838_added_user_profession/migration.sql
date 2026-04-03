/*
  Warnings:

  - You are about to drop the column `activities` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `forum` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `messages` on the `user_preferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profession" TEXT;

-- AlterTable
ALTER TABLE "user_preferences" DROP COLUMN "activities",
DROP COLUMN "forum",
DROP COLUMN "messages",
ADD COLUMN     "notificationActivities" BOOLEAN DEFAULT true,
ADD COLUMN     "notificationForum" BOOLEAN DEFAULT true,
ADD COLUMN     "notificationMessages" BOOLEAN DEFAULT true;
