/*
  Warnings:

  - You are about to drop the column `categoryId` on the `health_indicator` table. All the data in the column will be lost.
  - You are about to drop the column `intensite` on the `mood` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `mood` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `mood` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "health_indicator" DROP CONSTRAINT "health_indicator_categoryId_fkey";

-- DropIndex
DROP INDEX "mood_nom_key";

-- AlterTable
ALTER TABLE "health_indicator" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "mood" DROP COLUMN "intensite",
DROP COLUMN "nom",
ADD COLUMN     "color" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "intensity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "mood_name_key" ON "mood"("name");
