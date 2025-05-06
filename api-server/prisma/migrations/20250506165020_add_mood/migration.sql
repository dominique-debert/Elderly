/*
  Warnings:

  - You are about to drop the column `mood` on the `health_indicator` table. All the data in the column will be lost.
  - You are about to drop the `categoryType` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Valence" AS ENUM ('positive', 'negative', 'neutre');

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_typeId_fkey";

-- AlterTable
ALTER TABLE "health_indicator" DROP COLUMN "mood",
ADD COLUMN     "categoryId" INTEGER,
ADD COLUMN     "mood_category_id" INTEGER;

-- DropTable
DROP TABLE "categoryType";

-- CreateTable
CREATE TABLE "mood" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "valence" "Valence" NOT NULL,
    "intensite" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mood_nom_key" ON "mood"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "category_type_name_key" ON "category_type"("name");

-- AddForeignKey
ALTER TABLE "health_indicator" ADD CONSTRAINT "health_indicator_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "health_indicator" ADD CONSTRAINT "health_indicator_mood_category_id_fkey" FOREIGN KEY ("mood_category_id") REFERENCES "mood"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "category_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
