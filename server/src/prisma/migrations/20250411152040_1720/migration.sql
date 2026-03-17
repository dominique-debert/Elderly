-- CreateTable
CREATE TABLE "activity" (
    "id" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(6) NOT NULL,
    "end_date" TIMESTAMP(6),
    "location" VARCHAR(255),
    "gps_coordinates" TEXT,
    "max_spots" INTEGER,
    "category" VARCHAR(100),
    "recurring" BOOLEAN DEFAULT false,
    "frequency" VARCHAR(100),
    "reduced_mobility_access" BOOLEAN DEFAULT false,
    "difficulty_level" VARCHAR(100),
    "cost" DOUBLE PRECISION,
    "status" VARCHAR(50),
    "weather_requirements" VARCHAR(255),
    "transport_options" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_log" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "action_type" VARCHAR,
    "description" TEXT,
    "action_date" TIMESTAMP(6),
    "ip_address" VARCHAR,
    "device" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "activity_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_registration" (
    "activity_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "registration_date" TIMESTAMP(6) NOT NULL,
    "status" VARCHAR(50),
    "attendance_confirmed" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "activity_registration_pkey" PRIMARY KEY ("activity_id","user_id")
);

-- CreateTable
CREATE TABLE "badge" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "description" VARCHAR(255),
    "icon" VARCHAR(255),
    "category" VARCHAR(255),
    "level" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cognitive_exercise" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "difficulty_level" VARCHAR(50) NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "description" TEXT,
    "image" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "cognitive_exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collaborative_project" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "creator_id" TEXT,
    "creation_date" TIMESTAMP(6),
    "status" VARCHAR(50),
    "category" VARCHAR(100),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "collaborative_project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation" (
    "id" TEXT NOT NULL,
    "type" VARCHAR(255),
    "creation_date" TIMESTAMP(6),
    "title" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation_participant" (
    "conversation_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "date_added" TIMESTAMPTZ(6),
    "administrator" BOOLEAN,
    "last_access" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "conversation_participant_pkey" PRIMARY KEY ("conversation_id","user_id")
);

-- CreateTable
CREATE TABLE "exercise_program" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "difficulty_level" VARCHAR(50) NOT NULL,
    "adapted_for_reduced_mobility" BOOLEAN NOT NULL,
    "duration_minutes" INTEGER NOT NULL,
    "description" TEXT,
    "video_link" VARCHAR(255),
    "image" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "exercise_program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forum_category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "parent_category_id" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "forum_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forum_message" (
    "id" TEXT NOT NULL,
    "topic_id" TEXT,
    "author_id" TEXT,
    "content" TEXT,
    "creation_date" TIMESTAMP(6),
    "modification_date" TIMESTAMP(6),
    "solution_message" BOOLEAN,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "forum_message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forum_topic" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "creation_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "pinned" BOOLEAN DEFAULT false,
    "status" VARCHAR(50),
    "views" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "forum_topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goal_progress" (
    "id" TEXT NOT NULL,
    "goal_id" TEXT NOT NULL,
    "recording_date" DATE NOT NULL,
    "achieved_value" INTEGER NOT NULL,
    "goal_achieved" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "goal_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "health_indicator" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "recording_date" DATE NOT NULL,
    "step_count" INTEGER,
    "sleep_duration_minutes" INTEGER,
    "sleep_quality" INTEGER,
    "weight" DOUBLE PRECISION,
    "mood" VARCHAR(10),
    "notes" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "health_indicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "help_offer" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "helper_id" TEXT NOT NULL,
    "offer_date" TIMESTAMP(6) NOT NULL,
    "message" TEXT,
    "status" VARCHAR(50),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "help_offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "help_request" (
    "id" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "creation_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "needed_date" TIMESTAMP(6),
    "estimated_duration" INTEGER,
    "location" VARCHAR(255),
    "gps_coordinates" TEXT,
    "category" VARCHAR(100),
    "recurring" BOOLEAN DEFAULT false,
    "frequency" VARCHAR(50),
    "status" VARCHAR(50),
    "points_offered" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "help_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "local_service" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "category" VARCHAR(255),
    "address" VARCHAR(255),
    "gps_coordinates" TEXT,
    "phone" VARCHAR(20),
    "website" VARCHAR(255),
    "description" TEXT,
    "hours" VARCHAR(100),
    "senior_friendly" BOOLEAN,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "local_service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication_reminder" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "medication_name" VARCHAR(255) NOT NULL,
    "dosage" VARCHAR(100),
    "morning_reminder_time" TIME(6),
    "noon_reminder_time" TIME(6),
    "evening_reminder_time" TIME(6),
    "night_reminder_time" TIME(6),
    "days_of_week" VARCHAR(50),
    "instructions" TEXT,
    "active" BOOLEAN DEFAULT true,
    "start_date" TIMESTAMP(6),
    "end_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "medication_reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "conversation_id" TEXT,
    "sender_id" TEXT,
    "content" TEXT,
    "send_date" TIMESTAMP(6),
    "type" VARCHAR(50),
    "read" BOOLEAN,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "municipal_event" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(6) NOT NULL,
    "end_date" TIMESTAMP(6) NOT NULL,
    "location" VARCHAR(255),
    "gps_coordinates" TEXT,
    "organizer" VARCHAR(255),
    "contact" VARCHAR(255),
    "official_link" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "municipal_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "type" VARCHAR(50),
    "content" TEXT,
    "read" BOOLEAN,
    "action_link" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_preferences" (
    "user_id" TEXT NOT NULL,
    "message_notif" BOOLEAN DEFAULT true,
    "activity_notif" BOOLEAN DEFAULT true,
    "help_notif" BOOLEAN DEFAULT true,
    "forum_notif" BOOLEAN DEFAULT true,
    "email_notif" BOOLEAN DEFAULT true,
    "sms_notif" BOOLEAN DEFAULT false,
    "push_notif" BOOLEAN DEFAULT true,
    "quiet_hours_start" TIME(6),
    "quiet_hours_end" TIME(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "notification_preferences_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "nutritional_advice" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "category" VARCHAR(50),
    "season" VARCHAR(50) NOT NULL,
    "image" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "nutritional_advice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "offline_user" (
    "user_id" TEXT NOT NULL,
    "cached_data" JSON,
    "last_sync" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "offline_user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "project_member" (
    "project_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" VARCHAR(100),
    "join_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "project_member_pkey" PRIMARY KEY ("project_id","user_id")
);

-- CreateTable
CREATE TABLE "project_task" (
    "id" TEXT NOT NULL,
    "project_id" TEXT,
    "title" VARCHAR(255),
    "description" TEXT,
    "creation_date" TIMESTAMP(6),
    "due_date" TIMESTAMP(6),
    "status" VARCHAR(50),
    "assignee_id" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "project_task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "type" VARCHAR(100),
    "category" VARCHAR(100),
    "author_id" TEXT,
    "admin_validated" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "satisfaction_survey" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(6),
    "end_date" TIMESTAMP(6),
    "active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "satisfaction_survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_completed" (
    "id" TEXT NOT NULL,
    "request_id" TEXT NOT NULL,
    "helper_id" TEXT NOT NULL,
    "completion_date" TIMESTAMP(6) NOT NULL,
    "actual_duration" INTEGER,
    "creator_comment" TEXT,
    "helper_comment" TEXT,
    "creator_rating" INTEGER,
    "helper_rating" INTEGER,
    "points_exchanged" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "service_completed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_rating" (
    "service_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "rating" INTEGER,
    "comment" TEXT,
    "rating_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "service_rating_pkey" PRIMARY KEY ("service_id","user_id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500),
    "category" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survey_response" (
    "survey_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "responses" JSONB,
    "response_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "survey_response_pkey" PRIMARY KEY ("survey_id","user_id")
);

-- CreateTable
CREATE TABLE "trust_circle" (
    "user_id" TEXT NOT NULL,
    "contact_id" TEXT NOT NULL,
    "date_added" DATE,
    "access_level" VARCHAR,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "trust_circle_pkey" PRIMARY KEY ("user_id","contact_id")
);

-- CreateTable
CREATE TABLE "trusted_contact" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "relationship" VARCHAR(50),
    "share_medications" BOOLEAN NOT NULL DEFAULT false,
    "share_health_indicators" BOOLEAN NOT NULL DEFAULT false,
    "share_wellness_activities" BOOLEAN NOT NULL DEFAULT false,
    "emergency_alerts" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "trusted_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "urban_issue_report" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "category" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "address" VARCHAR(255),
    "gps_coordinates" TEXT,
    "report_date" TIMESTAMP(6) NOT NULL,
    "status" VARCHAR(255),
    "city_reference" VARCHAR(255),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "urban_issue_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "first_name" VARCHAR(100),
    "last_name" VARCHAR(100),
    "birth_date" DATE,
    "address" VARCHAR(255),
    "gps_coordinates" TEXT,
    "phone" VARCHAR(20),
    "profile_picture" VARCHAR(255),
    "registration_date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_verified" BOOLEAN NOT NULL DEFAULT false,
    "interface_preferences" VARCHAR(255),
    "two_factor_authentication" BOOLEAN NOT NULL DEFAULT false,
    "help_points" INTEGER DEFAULT 0,
    "reduced_mobility" BOOLEAN DEFAULT false,
    "activity_level" VARCHAR(20),
    "emergency_contact_name" VARCHAR(100),
    "emergency_contact_phone" VARCHAR(20),
    "status" VARCHAR(50) DEFAULT 'active',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_activity" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "completion_date" DATE NOT NULL,
    "exercise_program_id" TEXT,
    "cognitive_exercise_id" TEXT,
    "duration_minutes" INTEGER NOT NULL,
    "perceived_difficulty_level" INTEGER,
    "enjoyment_level" INTEGER,
    "comment" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_badge" (
    "user_id" TEXT NOT NULL,
    "badge_id" TEXT NOT NULL,
    "achievement_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_badge_pkey" PRIMARY KEY ("user_id","badge_id")
);

-- CreateTable
CREATE TABLE "user_device" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "device_type" VARCHAR,
    "device_name" VARCHAR,
    "operating_system" VARCHAR,
    "notification_token" VARCHAR,
    "last_connection" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_skill" (
    "user_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "level" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_skill_pkey" PRIMARY KEY ("user_id","skill_id")
);

-- CreateTable
CREATE TABLE "user_statistics" (
    "user_id" TEXT NOT NULL,
    "services_provided" INTEGER,
    "services_received" INTEGER,
    "activities_participated" INTEGER,
    "activities_organized" INTEGER,
    "forum_messages" INTEGER,
    "total_help_points" INTEGER,
    "network_size" INTEGER,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_statistics_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "video_call" (
    "id" TEXT NOT NULL,
    "conversation_id" TEXT,
    "initiator_id" TEXT,
    "start_date" TIMESTAMP(6),
    "end_date" TIMESTAMP(6),
    "status" VARCHAR(50),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "video_call_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wellness_badge" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "category" VARCHAR(50) NOT NULL,
    "image" VARCHAR(255),
    "level" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "wellness_badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wellness_goal" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "title" VARCHAR(255) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "target_value" INTEGER NOT NULL,
    "unit" VARCHAR(50) NOT NULL,
    "frequency" VARCHAR(50) NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "wellness_goal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trusted_contact_email_key" ON "trusted_contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_log" ADD CONSTRAINT "activity_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "activity_registration" ADD CONSTRAINT "activity_registration_activity_id_fkey" FOREIGN KEY ("activity_id") REFERENCES "activity"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

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
