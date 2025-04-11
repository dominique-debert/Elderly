/*
  Warnings:

  - The primary key for the `activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `activity_log` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `activity_registration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cognitive_exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `collaborative_project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `conversation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `conversation_participant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `exercise_program` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `forum_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `forum_message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `forum_topic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `goal_progress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `health_indicator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `help_offer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `help_request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `local_service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `medication_reminder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `municipal_event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `notification_preferences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `nutrition_advice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `nutritional_advice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `project_member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `project_task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `resource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `satisfaction_survey` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `service_completed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `service_rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `survey_response` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `trust_circle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `trusted_contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `urban_issue_report` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_statistics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `video_call` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `wellness_badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `wellness_goal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `user_id` on table `health_indicator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `conversation_id` on table `message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sender_id` on table `message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `notification` required. This step will fail if there are existing NULL values in that column.
  - Made the column `project_id` on table `project_task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `author_id` on table `resource` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `urban_issue_report` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "activity" DROP CONSTRAINT "activity_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "activity_log" DROP CONSTRAINT "activity_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "activity_registration" DROP CONSTRAINT "activity_registration_activity_id_fkey";

-- DropForeignKey
ALTER TABLE "activity_registration" DROP CONSTRAINT "activity_registration_user_id_fkey";

-- DropForeignKey
ALTER TABLE "collaborative_project" DROP CONSTRAINT "collaborative_project_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "conversation_participant" DROP CONSTRAINT "conversation_participant_conversation_id_fkey";

-- DropForeignKey
ALTER TABLE "conversation_participant" DROP CONSTRAINT "conversation_participant_user_id_fkey";

-- DropForeignKey
ALTER TABLE "forum_message" DROP CONSTRAINT "fk_author_id";

-- DropForeignKey
ALTER TABLE "forum_message" DROP CONSTRAINT "fk_topic_id";

-- DropForeignKey
ALTER TABLE "forum_topic" DROP CONSTRAINT "fk_author";

-- DropForeignKey
ALTER TABLE "forum_topic" DROP CONSTRAINT "fk_category";

-- DropForeignKey
ALTER TABLE "goal_progress" DROP CONSTRAINT "fk_goal";

-- DropForeignKey
ALTER TABLE "health_indicator" DROP CONSTRAINT "health_indicator_user_id_fkey";

-- DropForeignKey
ALTER TABLE "help_offer" DROP CONSTRAINT "fk_helper";

-- DropForeignKey
ALTER TABLE "help_offer" DROP CONSTRAINT "fk_request";

-- DropForeignKey
ALTER TABLE "help_request" DROP CONSTRAINT "fk_creator";

-- DropForeignKey
ALTER TABLE "medication_reminder" DROP CONSTRAINT "fk_user";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_conversation_id_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_sender_id_fkey";

-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_user_id_fkey";

-- DropForeignKey
ALTER TABLE "notification_preferences" DROP CONSTRAINT "notification_preferences_user_id_fkey";

-- DropForeignKey
ALTER TABLE "project_member" DROP CONSTRAINT "project_member_project_id_fkey";

-- DropForeignKey
ALTER TABLE "project_member" DROP CONSTRAINT "project_member_user_id_fkey";

-- DropForeignKey
ALTER TABLE "project_task" DROP CONSTRAINT "project_task_assignee_id_fkey";

-- DropForeignKey
ALTER TABLE "project_task" DROP CONSTRAINT "project_task_project_id_fkey";

-- DropForeignKey
ALTER TABLE "resource" DROP CONSTRAINT "fk_author";

-- DropForeignKey
ALTER TABLE "service_completed" DROP CONSTRAINT "fk_helper";

-- DropForeignKey
ALTER TABLE "service_completed" DROP CONSTRAINT "fk_request";

-- DropForeignKey
ALTER TABLE "service_rating" DROP CONSTRAINT "service_rating_service_id_fkey";

-- DropForeignKey
ALTER TABLE "service_rating" DROP CONSTRAINT "service_rating_user_id_fkey";

-- DropForeignKey
ALTER TABLE "survey_response" DROP CONSTRAINT "survey_response_survey_id_fkey";

-- DropForeignKey
ALTER TABLE "survey_response" DROP CONSTRAINT "survey_response_user_id_fkey";

-- DropForeignKey
ALTER TABLE "trust_circle" DROP CONSTRAINT "trust_circle_contact_id_fkey";

-- DropForeignKey
ALTER TABLE "trust_circle" DROP CONSTRAINT "trust_circle_user_id_fkey";

-- DropForeignKey
ALTER TABLE "trusted_contact" DROP CONSTRAINT "trusted_contact_user_id_fkey";

-- DropForeignKey
ALTER TABLE "urban_issue_report" DROP CONSTRAINT "urban_issue_report_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_activity" DROP CONSTRAINT "user_activity_cognitive_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "user_activity" DROP CONSTRAINT "user_activity_exercise_program_id_fkey";

-- DropForeignKey
ALTER TABLE "user_activity" DROP CONSTRAINT "user_activity_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_badge" DROP CONSTRAINT "user_badge_badge_id_fkey";

-- DropForeignKey
ALTER TABLE "user_badge" DROP CONSTRAINT "user_badge_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_device" DROP CONSTRAINT "user_device_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_skill" DROP CONSTRAINT "user_skill_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "user_skill" DROP CONSTRAINT "user_skill_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_statistics" DROP CONSTRAINT "user_statistics_user_id_fkey";

-- DropForeignKey
ALTER TABLE "video_call" DROP CONSTRAINT "video_call_conversation_id_fkey";

-- DropForeignKey
ALTER TABLE "video_call" DROP CONSTRAINT "video_call_initiator_id_fkey";

-- DropForeignKey
ALTER TABLE "wellness_goal" DROP CONSTRAINT "wellness_goal_user_id_fkey";

-- AlterTable
ALTER TABLE "activity" DROP CONSTRAINT "activity_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "creator_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "activity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "activity_id_seq";

-- AlterTable
ALTER TABLE "activity_log" DROP CONSTRAINT "activity_log_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "activity_log_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "activity_registration" DROP CONSTRAINT "activity_registration_pkey",
ALTER COLUMN "activity_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "activity_registration_pkey" PRIMARY KEY ("activity_id", "user_id");

-- AlterTable
ALTER TABLE "badge" DROP CONSTRAINT "badge_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "badge_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "cognitive_exercise" DROP CONSTRAINT "cognitive_exercise_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cognitive_exercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cognitive_exercise_id_seq";

-- AlterTable
ALTER TABLE "collaborative_project" DROP CONSTRAINT "collaborative_project_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "creator_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "collaborative_project_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "collaborative_project_id_seq";

-- AlterTable
ALTER TABLE "conversation" DROP CONSTRAINT "conversation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "conversation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "conversation_id_seq";

-- AlterTable
ALTER TABLE "conversation_participant" DROP CONSTRAINT "conversation_participant_pkey",
ALTER COLUMN "conversation_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "conversation_participant_pkey" PRIMARY KEY ("conversation_id", "user_id");

-- AlterTable
ALTER TABLE "exercise_program" DROP CONSTRAINT "exercise_program_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "exercise_program_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "exercise_program_id_seq";

-- AlterTable
ALTER TABLE "forum_category" DROP CONSTRAINT "forum_category_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "forum_category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "forum_category_id_seq";

-- AlterTable
ALTER TABLE "forum_message" DROP CONSTRAINT "forum_message_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "topic_id" SET DATA TYPE TEXT,
ALTER COLUMN "author_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "forum_message_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "forum_message_id_seq";

-- AlterTable
ALTER TABLE "forum_topic" DROP CONSTRAINT "forum_topic_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "category_id" SET DATA TYPE TEXT,
ALTER COLUMN "author_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "forum_topic_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "forum_topic_id_seq";

-- AlterTable
ALTER TABLE "goal_progress" DROP CONSTRAINT "goal_progress_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "goal_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "goal_progress_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "goal_progress_id_seq";

-- AlterTable
ALTER TABLE "health_indicator" DROP CONSTRAINT "health_indicator_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "health_indicator_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "health_indicator_id_seq";

-- AlterTable
ALTER TABLE "help_offer" DROP CONSTRAINT "help_offer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "request_id" SET DATA TYPE TEXT,
ALTER COLUMN "helper_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "help_offer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "help_offer_id_seq";

-- AlterTable
ALTER TABLE "help_request" DROP CONSTRAINT "help_request_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "creator_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "help_request_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "help_request_id_seq";

-- AlterTable
ALTER TABLE "local_service" DROP CONSTRAINT "local_service_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "local_service_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "local_service_id_seq";

-- AlterTable
ALTER TABLE "medication_reminder" DROP CONSTRAINT "medication_reminder_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "medication_reminder_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "medication_reminder_id_seq";

-- AlterTable
ALTER TABLE "message" DROP CONSTRAINT "message_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "conversation_id" SET NOT NULL,
ALTER COLUMN "conversation_id" SET DATA TYPE TEXT,
ALTER COLUMN "sender_id" SET NOT NULL,
ALTER COLUMN "sender_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "message_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "message_id_seq";

-- AlterTable
ALTER TABLE "municipal_event" DROP CONSTRAINT "municipal_event_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "municipal_event_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "municipal_event_id_seq";

-- AlterTable
ALTER TABLE "notification" DROP CONSTRAINT "notification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "notification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "notification_id_seq";

-- AlterTable
ALTER TABLE "notification_preferences" DROP CONSTRAINT "notification_preferences_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "notification_preferences_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "nutrition_advice" DROP CONSTRAINT "nutrition_advice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "nutrition_advice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "nutrition_advice_id_seq";

-- AlterTable
ALTER TABLE "nutritional_advice" DROP CONSTRAINT "nutritional_advice_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "nutritional_advice_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "nutritional_advice_id_seq";

-- AlterTable
ALTER TABLE "project_member" DROP CONSTRAINT "project_member_pkey",
ALTER COLUMN "project_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "project_member_pkey" PRIMARY KEY ("project_id", "user_id");

-- AlterTable
ALTER TABLE "project_task" DROP CONSTRAINT "project_task_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "project_id" SET NOT NULL,
ALTER COLUMN "project_id" SET DATA TYPE TEXT,
ALTER COLUMN "assignee_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "project_task_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "project_task_id_seq";

-- AlterTable
ALTER TABLE "resource" DROP CONSTRAINT "resource_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "author_id" SET NOT NULL,
ALTER COLUMN "author_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "resource_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "resource_id_seq";

-- AlterTable
ALTER TABLE "satisfaction_survey" DROP CONSTRAINT "satisfaction_survey_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "satisfaction_survey_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "satisfaction_survey_id_seq";

-- AlterTable
ALTER TABLE "service_completed" DROP CONSTRAINT "service_completed_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "request_id" SET DATA TYPE TEXT,
ALTER COLUMN "helper_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "service_completed_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "service_completed_id_seq";

-- AlterTable
ALTER TABLE "service_rating" DROP CONSTRAINT "service_rating_pkey",
ALTER COLUMN "service_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "service_rating_pkey" PRIMARY KEY ("service_id", "user_id");

-- AlterTable
ALTER TABLE "skill" DROP CONSTRAINT "skill_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "skill_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "skill_id_seq";

-- AlterTable
ALTER TABLE "survey_response" DROP CONSTRAINT "survey_response_pkey",
ALTER COLUMN "survey_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "survey_response_pkey" PRIMARY KEY ("survey_id", "user_id");

-- AlterTable
ALTER TABLE "trust_circle" DROP CONSTRAINT "trust_circle_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "contact_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "trust_circle_pkey" PRIMARY KEY ("user_id", "contact_id");

-- AlterTable
ALTER TABLE "trusted_contact" DROP CONSTRAINT "trusted_contact_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "trusted_contact_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "trusted_contact_id_seq";

-- AlterTable
ALTER TABLE "urban_issue_report" DROP CONSTRAINT "urban_issue_report_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "urban_issue_report_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "urban_issue_report_id_seq";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";

-- AlterTable
ALTER TABLE "user_activity" DROP CONSTRAINT "user_activity_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "exercise_program_id" SET DATA TYPE TEXT,
ALTER COLUMN "cognitive_exercise_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_activity_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_activity_id_seq";

-- AlterTable
ALTER TABLE "user_badge" DROP CONSTRAINT "user_badge_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "badge_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_badge_pkey" PRIMARY KEY ("user_id", "badge_id");

-- AlterTable
ALTER TABLE "user_device" ALTER COLUMN "user_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user_skill" DROP CONSTRAINT "user_skill_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "skill_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_skill_pkey" PRIMARY KEY ("user_id", "skill_id");

-- AlterTable
ALTER TABLE "user_statistics" DROP CONSTRAINT "user_statistics_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_statistics_pkey" PRIMARY KEY ("user_id");

-- AlterTable
ALTER TABLE "video_call" DROP CONSTRAINT "video_call_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "conversation_id" SET DATA TYPE TEXT,
ALTER COLUMN "initiator_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "video_call_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "video_call_id_seq";

-- AlterTable
ALTER TABLE "wellness_badge" DROP CONSTRAINT "wellness_badge_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "wellness_badge_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "wellness_badge_id_seq";

-- AlterTable
ALTER TABLE "wellness_goal" DROP CONSTRAINT "wellness_goal_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "wellness_goal_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "wellness_goal_id_seq";

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_log" ADD CONSTRAINT "activity_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_registration" ADD CONSTRAINT "activity_registration_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_registration" ADD CONSTRAINT "activity_registration_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "collaborative_project" ADD CONSTRAINT "collaborative_project_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conversation_participant" ADD CONSTRAINT "conversation_participant_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversation"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "conversation_participant" ADD CONSTRAINT "conversation_participant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "forum_message" ADD CONSTRAINT "fk_author_id" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "forum_message" ADD CONSTRAINT "fk_topic_id" FOREIGN KEY ("topic_id") REFERENCES "forum_topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "forum_topic" ADD CONSTRAINT "fk_author" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "forum_topic" ADD CONSTRAINT "fk_category" FOREIGN KEY ("category_id") REFERENCES "forum_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "goal_progress" ADD CONSTRAINT "fk_goal" FOREIGN KEY ("goal_id") REFERENCES "wellness_goal"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "health_indicator" ADD CONSTRAINT "health_indicator_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "help_offer" ADD CONSTRAINT "fk_helper" FOREIGN KEY ("helper_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "help_offer" ADD CONSTRAINT "fk_request" FOREIGN KEY ("request_id") REFERENCES "help_request"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "help_request" ADD CONSTRAINT "fk_creator" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medication_reminder" ADD CONSTRAINT "fk_user" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notification_preferences" ADD CONSTRAINT "notification_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_member" ADD CONSTRAINT "project_member_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "collaborative_project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_member" ADD CONSTRAINT "project_member_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_task" ADD CONSTRAINT "project_task_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_task" ADD CONSTRAINT "project_task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "collaborative_project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resource" ADD CONSTRAINT "fk_author" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "service_completed" ADD CONSTRAINT "fk_helper" FOREIGN KEY ("helper_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "service_completed" ADD CONSTRAINT "fk_request" FOREIGN KEY ("request_id") REFERENCES "help_request"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "service_rating" ADD CONSTRAINT "service_rating_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "local_service"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "service_rating" ADD CONSTRAINT "service_rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "survey_response" ADD CONSTRAINT "survey_response_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "satisfaction_survey"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "survey_response" ADD CONSTRAINT "survey_response_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trust_circle" ADD CONSTRAINT "trust_circle_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trust_circle" ADD CONSTRAINT "trust_circle_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "trusted_contact" ADD CONSTRAINT "trusted_contact_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "urban_issue_report" ADD CONSTRAINT "urban_issue_report_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_activity" ADD CONSTRAINT "user_activity_cognitive_exercise_id_fkey" FOREIGN KEY ("cognitive_exercise_id") REFERENCES "cognitive_exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_activity" ADD CONSTRAINT "user_activity_exercise_program_id_fkey" FOREIGN KEY ("exercise_program_id") REFERENCES "exercise_program"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_activity" ADD CONSTRAINT "user_activity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_badge" ADD CONSTRAINT "user_badge_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "badge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_badge" ADD CONSTRAINT "user_badge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_device" ADD CONSTRAINT "user_device_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_skill" ADD CONSTRAINT "user_skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_skill" ADD CONSTRAINT "user_skill_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_statistics" ADD CONSTRAINT "user_statistics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "video_call" ADD CONSTRAINT "video_call_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "video_call" ADD CONSTRAINT "video_call_initiator_id_fkey" FOREIGN KEY ("initiator_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wellness_goal" ADD CONSTRAINT "wellness_goal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
