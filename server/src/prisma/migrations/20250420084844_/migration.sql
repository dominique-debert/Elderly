/*
  Warnings:

  - The primary key for the `service_rating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `service_rating` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "service_rating" DROP CONSTRAINT "service_rating_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "service_rating_pkey" PRIMARY KEY ("id");
