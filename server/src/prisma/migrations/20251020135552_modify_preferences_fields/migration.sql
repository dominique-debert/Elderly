/*
  Warnings:

  - You are about to drop the column `notificationActivities` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `notificationForum` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `notificationMessages` on the `user_preferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_preferences" DROP COLUMN "notificationActivities",
DROP COLUMN "notificationForum",
DROP COLUMN "notificationMessages",
ADD COLUMN     "notification_activities" BOOLEAN DEFAULT true,
ADD COLUMN     "notification_forum" BOOLEAN DEFAULT true,
ADD COLUMN     "notification_messages" BOOLEAN DEFAULT true;
