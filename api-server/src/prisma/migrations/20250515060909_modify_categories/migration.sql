/*
  Warnings:

  - You are about to drop the column `programCategoryId` on the `cognitive_exercise` table. All the data in the column will be lost.
  - You are about to drop the column `programCategoryId` on the `exercise_program` table. All the data in the column will be lost.
  - You are about to drop the `programCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cognitive_exercise" DROP CONSTRAINT "cognitive_exercise_programCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "exercise_program" DROP CONSTRAINT "exercise_program_programCategoryId_fkey";

-- AlterTable
ALTER TABLE "cognitive_exercise" DROP COLUMN "programCategoryId";

-- AlterTable
ALTER TABLE "exercise_program" DROP COLUMN "programCategoryId";

-- DropTable
DROP TABLE "programCategory";
