/*
  Warnings:

  - A unique constraint covering the columns `[category_id]` on the table `badge` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "badge_category_id_key" ON "badge"("category_id");
