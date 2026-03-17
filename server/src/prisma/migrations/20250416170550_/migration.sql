/*
  Warnings:

  - You are about to drop the column `ca` on the `skill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "badge_category_id_fkey";

-- DropForeignKey
ALTER TABLE "cognitive_exercise" DROP CONSTRAINT "cognitive_exercise_category_id_fkey";

-- DropForeignKey
ALTER TABLE "exercise_program" DROP CONSTRAINT "exercise_program_category_id_fkey";

-- DropForeignKey
ALTER TABLE "help_request" DROP CONSTRAINT "help_request_category_id_fkey";

-- DropForeignKey
ALTER TABLE "nutritional_advice" DROP CONSTRAINT "nutritional_advice_category_id_fkey";

-- DropForeignKey
ALTER TABLE "resource" DROP CONSTRAINT "resource_category_id_fkey";

-- DropForeignKey
ALTER TABLE "skill" DROP CONSTRAINT "skill_ca_fkey";

-- DropForeignKey
ALTER TABLE "urban_issue_report" DROP CONSTRAINT "urban_issue_report_category_id_fkey";

-- DropForeignKey
ALTER TABLE "wellness_badge" DROP CONSTRAINT "wellness_badge_category_id_fkey";

-- DropForeignKey
ALTER TABLE "wellness_goal" DROP CONSTRAINT "wellness_goal_category_id_fkey";

-- AlterTable
ALTER TABLE "badge" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "cognitive_exercise" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "collaborative_project" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "exercise_program" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "forum_topic" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "help_request" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "nutritional_advice" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "resource" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "skill" DROP COLUMN "ca",
ADD COLUMN     "category_id" TEXT;

-- AlterTable
ALTER TABLE "urban_issue_report" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "wellness_badge" ALTER COLUMN "category_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "wellness_goal" ALTER COLUMN "category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "badge_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cognitive_exercise" ADD CONSTRAINT "cognitive_exercise_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "cognitive_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_program" ADD CONSTRAINT "exercise_program_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "program_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "help_request" ADD CONSTRAINT "help_request_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "help_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritional_advice" ADD CONSTRAINT "nutritional_advice_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "nutritional_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource" ADD CONSTRAINT "resource_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "resource_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "skill_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "urban_issue_report" ADD CONSTRAINT "urban_issue_report_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "issue_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wellness_badge" ADD CONSTRAINT "wellness_badge_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "wellness_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wellness_goal" ADD CONSTRAINT "wellness_goal_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "wellness_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
