/*
  Warnings:

  - You are about to drop the `goal_progress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "goal_progress" DROP CONSTRAINT "fk_goal";

-- DropTable
DROP TABLE "goal_progress";

-- CreateTable
CREATE TABLE "wellness_goal_progress" (
    "id" TEXT NOT NULL,
    "goal_id" TEXT NOT NULL,
    "recording_date" DATE NOT NULL,
    "achieved_value" INTEGER NOT NULL,
    "goal_achieved" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "wellness_goal_progress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wellness_goal_progress" ADD CONSTRAINT "fk_goal" FOREIGN KEY ("goal_id") REFERENCES "wellness_goal"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
