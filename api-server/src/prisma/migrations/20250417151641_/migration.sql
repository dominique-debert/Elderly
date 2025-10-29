-- AlterTable
ALTER TABLE "message" ALTER COLUMN "read" SET DEFAULT false;

-- AlterTable
ALTER TABLE "satisfaction_survey" ALTER COLUMN "active" SET DEFAULT false;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "activity_level" SET DEFAULT 'active';

-- AlterTable
ALTER TABLE "wellness_goal" ALTER COLUMN "active" SET DEFAULT false;

-- AlterTable
ALTER TABLE "wellness_goal_progress" ALTER COLUMN "goal_achieved" SET DEFAULT false;
