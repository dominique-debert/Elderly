-- DropForeignKey
ALTER TABLE "collaborative_project" DROP CONSTRAINT "collaborative_project_category_id_fkey";

-- DropForeignKey
ALTER TABLE "local_service" DROP CONSTRAINT "local_service_category_id_fkey";

-- AlterTable
ALTER TABLE "activity" ALTER COLUMN "location" SET DATA TYPE TEXT,
ALTER COLUMN "frequency" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT,
ALTER COLUMN "weather_requirements" SET DATA TYPE TEXT,
ALTER COLUMN "transport_options" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "activity_log" ALTER COLUMN "action_type" SET DATA TYPE TEXT,
ALTER COLUMN "ip_address" SET DATA TYPE TEXT,
ALTER COLUMN "device" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "activity_registration" ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "badge" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT,
ALTER COLUMN "icon" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "cognitive_exercise" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "collaborative_project" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT,
ALTER COLUMN "category_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "conversation" ALTER COLUMN "type" SET DATA TYPE TEXT,
ALTER COLUMN "title" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "exercise_program" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "video_link" SET DATA TYPE TEXT,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "forum_category" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "forum_topic" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "health_indicator" ALTER COLUMN "mood" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "help_offer" ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "help_request" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "location" SET DATA TYPE TEXT,
ALTER COLUMN "frequency" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "local_service" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "address" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT,
ALTER COLUMN "website" SET DATA TYPE TEXT,
ALTER COLUMN "hours" SET DATA TYPE TEXT,
ALTER COLUMN "category_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "medication_reminder" ALTER COLUMN "medication_name" SET DATA TYPE TEXT,
ALTER COLUMN "dosage" SET DATA TYPE TEXT,
ALTER COLUMN "days_of_week" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "message" ALTER COLUMN "type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "municipal_event" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "location" SET DATA TYPE TEXT,
ALTER COLUMN "organizer" SET DATA TYPE TEXT,
ALTER COLUMN "contact" SET DATA TYPE TEXT,
ALTER COLUMN "official_link" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "notification" ALTER COLUMN "type" SET DATA TYPE TEXT,
ALTER COLUMN "action_link" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "nutritional_advice" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "season" SET DATA TYPE TEXT,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "project_member" ALTER COLUMN "role" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "project_task" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "resource" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "satisfaction_survey" ALTER COLUMN "title" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "skill" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "trust_circle" ALTER COLUMN "access_level" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "trusted_contact" ALTER COLUMN "last_name" SET DATA TYPE TEXT,
ALTER COLUMN "first_name" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT,
ALTER COLUMN "relationship" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "urban_issue_report" ALTER COLUMN "address" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT,
ALTER COLUMN "city_reference" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "password_hash" SET DATA TYPE TEXT,
ALTER COLUMN "first_name" SET DATA TYPE TEXT,
ALTER COLUMN "last_name" SET DATA TYPE TEXT,
ALTER COLUMN "address" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT,
ALTER COLUMN "profile_picture" SET DATA TYPE TEXT,
ALTER COLUMN "interface_preferences" SET DATA TYPE TEXT,
ALTER COLUMN "activity_level" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user_device" ALTER COLUMN "device_type" SET DATA TYPE TEXT,
ALTER COLUMN "device_name" SET DATA TYPE TEXT,
ALTER COLUMN "operating_system" SET DATA TYPE TEXT,
ALTER COLUMN "notification_token" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "video_call" ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "wellness_badge" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "wellness_goal" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "unit" SET DATA TYPE TEXT,
ALTER COLUMN "frequency" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "collaborative_project" ADD CONSTRAINT "collaborative_project_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "project_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "local_service" ADD CONSTRAINT "local_service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "service_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
