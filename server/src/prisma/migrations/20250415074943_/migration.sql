/*
  Warnings:

  - The `difficulty_level` column on the `activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `difficulty_level` column on the `cognitive_exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `difficulty_level` column on the `exercise_program` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "activity" ALTER COLUMN "max_spots" DROP NOT NULL,
DROP COLUMN "difficulty_level",
ADD COLUMN     "difficulty_level" INTEGER;

-- AlterTable
ALTER TABLE "cognitive_exercise" DROP COLUMN "difficulty_level",
ADD COLUMN     "difficulty_level" INTEGER,
ALTER COLUMN "duration_minutes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "exercise_program" DROP COLUMN "difficulty_level",
ADD COLUMN     "difficulty_level" INTEGER,
ALTER COLUMN "duration_minutes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "user_activity" ALTER COLUMN "duration_minutes" DROP NOT NULL;
