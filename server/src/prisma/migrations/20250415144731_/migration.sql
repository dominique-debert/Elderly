/*
  Warnings:

  - You are about to drop the column `user_id` on the `activity_log` table. All the data in the column will be lost.
  - You are about to drop the column `program_categoryId` on the `cognitive_exercise` table. All the data in the column will be lost.
  - You are about to drop the column `exercise_programId` on the `program_category` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `skill` table. All the data in the column will be lost.
  - Added the required column `exercise_program_id` to the `program_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ca` to the `skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "activity_log" DROP CONSTRAINT "activity_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "cognitive_exercise" DROP CONSTRAINT "cognitive_exercise_program_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "program_category" DROP CONSTRAINT "program_category_exercise_programId_fkey";

-- DropForeignKey
ALTER TABLE "skill" DROP CONSTRAINT "skill_category_id_fkey";

-- DropForeignKey
ALTER TABLE "trust_circle" DROP CONSTRAINT "trust_circle_contact_id_fkey";

-- DropForeignKey
ALTER TABLE "trust_circle" DROP CONSTRAINT "trust_circle_user_id_fkey";

-- AlterTable
ALTER TABLE "activity_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "activity_log" DROP COLUMN "user_id",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "badge_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "cognitive_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "cognitive_exercise" DROP COLUMN "program_categoryId",
ADD COLUMN     "programCategoryId" TEXT;

-- AlterTable
ALTER TABLE "help_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "issue_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "nutritional_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "program_category" DROP COLUMN "exercise_programId",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "exercise_program_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "project_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "resource_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "service_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "skill" DROP COLUMN "category_id",
ADD COLUMN     "ca" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skill_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "wellness_category" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(6);

-- AddForeignKey
ALTER TABLE "activity_log" ADD CONSTRAINT "activity_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cognitive_exercise" ADD CONSTRAINT "cognitive_exercise_programCategoryId_fkey" FOREIGN KEY ("programCategoryId") REFERENCES "program_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_ca_fkey" FOREIGN KEY ("ca") REFERENCES "skill_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "program_category" ADD CONSTRAINT "program_category_exercise_program_id_fkey" FOREIGN KEY ("exercise_program_id") REFERENCES "exercise_program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
