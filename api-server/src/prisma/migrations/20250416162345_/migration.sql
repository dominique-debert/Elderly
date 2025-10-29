/*
  Warnings:

  - You are about to drop the column `exercise_program_id` on the `program_category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "program_category" DROP CONSTRAINT "program_category_exercise_program_id_fkey";

-- AlterTable
ALTER TABLE "program_category" DROP COLUMN "exercise_program_id";

-- AddForeignKey
ALTER TABLE "exercise_program" ADD CONSTRAINT "exercise_program_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "program_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
