/*
  Warnings:

  - You are about to drop the column `activity_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `email_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `forum_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `help_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `message_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `push_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `sms_notif` on the `notification_preferences` table. All the data in the column will be lost.
  - Made the column `title` on table `collaborative_project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creator_id` on table `collaborative_project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creation_date` on table `collaborative_project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `collaborative_project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `parent_category_id` on table `forum_category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `help_request` required. This step will fail if there are existing NULL values in that column.
  - Made the column `conversation_id` on table `message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sender_id` on table `message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `send_date` on table `message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `municipal_event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `notification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `notification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `notification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `project_member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `join_date` on table `project_member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `project_id` on table `project_task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `project_task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creation_date` on table `project_task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `resource` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `resource` required. This step will fail if there are existing NULL values in that column.
  - Made the column `author_id` on table `resource` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date_added` on table `trust_circle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `access_level` on table `trust_circle` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `trusted_contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `urban_issue_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `urban_issue_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `urban_issue_report` required. This step will fail if there are existing NULL values in that column.
  - Made the column `achievement_date` on table `user_badge` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `user_device` required. This step will fail if there are existing NULL values in that column.
  - Made the column `device_type` on table `user_device` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notification_token` on table `user_device` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_connection` on table `user_device` required. This step will fail if there are existing NULL values in that column.
  - Made the column `conversation_id` on table `video_call` required. This step will fail if there are existing NULL values in that column.
  - Made the column `initiator_id` on table `video_call` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_date` on table `video_call` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `video_call` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `video_call` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `wellness_goal` required. This step will fail if there are existing NULL values in that column.
  - Made the column `active` on table `wellness_goal` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "collaborative_project" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "creator_id" SET NOT NULL,
ALTER COLUMN "creation_date" SET NOT NULL,
ALTER COLUMN "creation_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "category" SET NOT NULL;

-- AlterTable
ALTER TABLE "forum_category" ALTER COLUMN "parent_category_id" SET NOT NULL,
ALTER COLUMN "parent_category_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "help_request" ALTER COLUMN "category" SET NOT NULL;

-- AlterTable
ALTER TABLE "message" ALTER COLUMN "conversation_id" SET NOT NULL,
ALTER COLUMN "sender_id" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "send_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "municipal_event" ALTER COLUMN "location" SET NOT NULL;

-- AlterTable
ALTER TABLE "notification" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "content" SET NOT NULL;

-- AlterTable
ALTER TABLE "notification_preferences" DROP COLUMN "activity_notif",
DROP COLUMN "email_notif",
DROP COLUMN "forum_notif",
DROP COLUMN "help_notif",
DROP COLUMN "message_notif",
DROP COLUMN "push_notif",
DROP COLUMN "sms_notif",
ADD COLUMN     "activity_notification" BOOLEAN DEFAULT false,
ADD COLUMN     "email_notification" BOOLEAN DEFAULT false,
ADD COLUMN     "forum_notification" BOOLEAN DEFAULT false,
ADD COLUMN     "help_notification" BOOLEAN DEFAULT false,
ADD COLUMN     "message_notification" BOOLEAN DEFAULT false,
ADD COLUMN     "push_notification" BOOLEAN DEFAULT false,
ADD COLUMN     "sms_notification" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "project_member" ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "join_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "project_task" ALTER COLUMN "project_id" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "creation_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "resource" ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "author_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "trust_circle" ALTER COLUMN "date_added" SET NOT NULL,
ALTER COLUMN "access_level" SET NOT NULL;

-- AlterTable
ALTER TABLE "trusted_contact" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "urban_issue_report" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_badge" ALTER COLUMN "achievement_date" SET NOT NULL;

-- AlterTable
ALTER TABLE "user_device" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "device_type" SET NOT NULL,
ALTER COLUMN "notification_token" SET NOT NULL,
ALTER COLUMN "last_connection" SET NOT NULL;

-- AlterTable
ALTER TABLE "video_call" ALTER COLUMN "conversation_id" SET NOT NULL,
ALTER COLUMN "initiator_id" SET NOT NULL,
ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "wellness_goal" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "active" SET NOT NULL;
