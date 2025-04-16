/*
  Warnings:

  - A unique constraint covering the columns `[badge_id]` on the table `user_badge` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_badge_badge_id_key" ON "user_badge"("badge_id");
