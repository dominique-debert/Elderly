/*
  Warnings:

  - You are about to drop the column `category` on the `activity` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `badge` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `cognitive_exercise` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `collaborative_project` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `exercise_program` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `help_request` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `local_service` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `nutritional_advice` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `resource` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `urban_issue_report` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `wellness_badge` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `wellness_goal` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Made the column `end_date` on table `activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `max_spots` on table `activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reduced_mobility_access` on table `activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `difficulty_level` on table `activity` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `category_id` to the `badge` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `badge` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `category_id` to the `cognitive_exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `collaborative_project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `exercise_program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `help_request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `nutritional_advice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `urban_issue_report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `wellness_badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `wellness_goal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activity" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL,
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "max_spots" SET NOT NULL,
ALTER COLUMN "reduced_mobility_access" SET NOT NULL,
ALTER COLUMN "difficulty_level" SET NOT NULL;

-- AlterTable
ALTER TABLE "badge" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "cognitive_exercise" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "program_categoryId" TEXT;

-- AlterTable
ALTER TABLE "collaborative_project" DROP COLUMN "category",
ADD COLUMN     "category_id" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "exercise_program" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "help_request" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "local_service" DROP COLUMN "category",
ADD COLUMN     "category_id" VARCHAR(255);

-- AlterTable
ALTER TABLE "nutritional_advice" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "resource" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skill" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "urban_issue_report" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "wellness_badge" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "wellness_goal" DROP COLUMN "category",
ADD COLUMN     "category_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "activity_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "activity_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badge_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "badge_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cognitive_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "cognitive_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "project_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "program_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "exercise_programId" TEXT NOT NULL,

    CONSTRAINT "program_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "help_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "help_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "service_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutritional_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "nutritional_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "resource_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "skill_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "issue_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "issue_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wellness_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "wellness_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "activity_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "badge_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cognitive_exercise" ADD CONSTRAINT "cognitive_exercise_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "cognitive_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cognitive_exercise" ADD CONSTRAINT "cognitive_exercise_program_categoryId_fkey" FOREIGN KEY ("program_categoryId") REFERENCES "program_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collaborative_project" ADD CONSTRAINT "collaborative_project_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "project_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "program_category" ADD CONSTRAINT "program_category_exercise_programId_fkey" FOREIGN KEY ("exercise_programId") REFERENCES "exercise_program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "help_request" ADD CONSTRAINT "help_request_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "help_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "local_service" ADD CONSTRAINT "local_service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "service_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritional_advice" ADD CONSTRAINT "nutritional_advice_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "nutritional_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource" ADD CONSTRAINT "resource_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "resource_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "skill_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "urban_issue_report" ADD CONSTRAINT "urban_issue_report_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "issue_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wellness_badge" ADD CONSTRAINT "wellness_badge_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "wellness_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wellness_goal" ADD CONSTRAINT "wellness_goal_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "wellness_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
