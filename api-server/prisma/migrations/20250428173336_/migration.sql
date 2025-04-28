/*
  Warnings:

  - The `programCategoryId` column on the `cognitive_exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `activity_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `badge_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cognitive_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `help_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `issue_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutritional_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `program_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `resource_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `skill_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wellness_category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `cognitive_exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `collaborative_project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `exercise_program` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category_id` on the `help_request` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category_id` on the `local_service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category_id` on the `nutritional_advice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `category_id` to the `resource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `skill` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category_id` on the `urban_issue_report` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `category_id` to the `wellness_badge` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category_id` on the `wellness_goal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "activity" DROP CONSTRAINT "activity_category_id_fkey";

-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "badge_category_id_fkey";

-- DropForeignKey
ALTER TABLE "cognitive_exercise" DROP CONSTRAINT "cognitive_exercise_category_id_fkey";

-- DropForeignKey
ALTER TABLE "cognitive_exercise" DROP CONSTRAINT "cognitive_exercise_programCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "collaborative_project" DROP CONSTRAINT "collaborative_project_category_id_fkey";

-- DropForeignKey
ALTER TABLE "exercise_program" DROP CONSTRAINT "exercise_program_category_id_fkey";

-- DropForeignKey
ALTER TABLE "help_request" DROP CONSTRAINT "help_request_category_id_fkey";

-- DropForeignKey
ALTER TABLE "local_service" DROP CONSTRAINT "local_service_category_id_fkey";

-- DropForeignKey
ALTER TABLE "nutritional_advice" DROP CONSTRAINT "nutritional_advice_category_id_fkey";

-- DropForeignKey
ALTER TABLE "resource" DROP CONSTRAINT "resource_category_id_fkey";

-- DropForeignKey
ALTER TABLE "skill" DROP CONSTRAINT "skill_category_id_fkey";

-- DropForeignKey
ALTER TABLE "urban_issue_report" DROP CONSTRAINT "urban_issue_report_category_id_fkey";

-- DropForeignKey
ALTER TABLE "wellness_badge" DROP CONSTRAINT "wellness_badge_category_id_fkey";

-- DropForeignKey
ALTER TABLE "wellness_goal" DROP CONSTRAINT "wellness_goal_category_id_fkey";

-- AlterTable
ALTER TABLE "activity" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "badge" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "cognitive_exercise" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL,
DROP COLUMN "programCategoryId",
ADD COLUMN     "programCategoryId" INTEGER;

-- AlterTable
ALTER TABLE "collaborative_project" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "exercise_program" ADD COLUMN     "programCategoryId" INTEGER,
DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "help_request" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "local_service" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "nutritional_advice" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "resource" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "skill" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "urban_issue_report" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "wellness_badge" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "wellness_goal" DROP COLUMN "category_id",
ADD COLUMN     "category_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "activity_category";

-- DropTable
DROP TABLE "badge_category";

-- DropTable
DROP TABLE "cognitive_category";

-- DropTable
DROP TABLE "help_category";

-- DropTable
DROP TABLE "issue_category";

-- DropTable
DROP TABLE "nutritional_category";

-- DropTable
DROP TABLE "program_category";

-- DropTable
DROP TABLE "project_category";

-- DropTable
DROP TABLE "resource_category";

-- DropTable
DROP TABLE "service_category";

-- DropTable
DROP TABLE "skill_category";

-- DropTable
DROP TABLE "wellness_category";

-- CreateTable
CREATE TABLE "programCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "programCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoryType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categoryType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categoryType_name_key" ON "categoryType"("name");

-- CreateIndex
CREATE INDEX "category_typeId_idx" ON "category"("typeId");

-- CreateIndex
CREATE UNIQUE INDEX "badge_category_id_key" ON "badge"("category_id");

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cognitive_exercise" ADD CONSTRAINT "cognitive_exercise_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cognitive_exercise" ADD CONSTRAINT "cognitive_exercise_programCategoryId_fkey" FOREIGN KEY ("programCategoryId") REFERENCES "programCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collaborative_project" ADD CONSTRAINT "collaborative_project_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_program" ADD CONSTRAINT "exercise_program_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise_program" ADD CONSTRAINT "exercise_program_programCategoryId_fkey" FOREIGN KEY ("programCategoryId") REFERENCES "programCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "help_request" ADD CONSTRAINT "help_request_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "local_service" ADD CONSTRAINT "local_service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritional_advice" ADD CONSTRAINT "nutritional_advice_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resource" ADD CONSTRAINT "resource_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "urban_issue_report" ADD CONSTRAINT "urban_issue_report_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wellness_badge" ADD CONSTRAINT "wellness_badge_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wellness_goal" ADD CONSTRAINT "wellness_goal_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "categoryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
