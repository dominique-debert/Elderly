-- RenameForeignKey
ALTER TABLE "forum_message" RENAME CONSTRAINT "fk_author_id" TO "forum_message_author_id_fkey";

-- RenameForeignKey
ALTER TABLE "forum_message" RENAME CONSTRAINT "fk_topic_id" TO "forum_message_topic_id_fkey";

-- RenameForeignKey
ALTER TABLE "forum_topic" RENAME CONSTRAINT "fk_author" TO "forum_topic_author_id_fkey";

-- RenameForeignKey
ALTER TABLE "forum_topic" RENAME CONSTRAINT "fk_category" TO "forum_topic_category_id_fkey";

-- RenameForeignKey
ALTER TABLE "help_offer" RENAME CONSTRAINT "fk_helper" TO "help_offer_helper_id_fkey";

-- RenameForeignKey
ALTER TABLE "help_offer" RENAME CONSTRAINT "fk_request" TO "help_offer_request_id_fkey";

-- RenameForeignKey
ALTER TABLE "help_request" RENAME CONSTRAINT "fk_creator" TO "help_request_creator_id_fkey";

-- RenameForeignKey
ALTER TABLE "medication_reminder" RENAME CONSTRAINT "fk_user" TO "medication_reminder_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "resource" RENAME CONSTRAINT "fk_author" TO "resource_author_id_fkey";

-- RenameForeignKey
ALTER TABLE "service_completed" RENAME CONSTRAINT "fk_helper" TO "service_completed_helper_id_fkey";

-- RenameForeignKey
ALTER TABLE "service_completed" RENAME CONSTRAINT "fk_request" TO "service_completed_request_id_fkey";

-- RenameForeignKey
ALTER TABLE "wellness_goal_progress" RENAME CONSTRAINT "fk_goal" TO "wellness_goal_progress_goal_id_fkey";
