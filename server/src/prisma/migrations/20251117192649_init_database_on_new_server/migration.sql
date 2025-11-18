/*
  Warnings:

  - The primary key for the `user_badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_badge` table. All the data in the column will be lost.
  - The primary key for the `user_contacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user_contacts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'member');

-- DropForeignKey
ALTER TABLE "badge" DROP CONSTRAINT "badge_userBadgeId_fkey";

-- AlterTable
ALTER TABLE "badge" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "user_badge" DROP CONSTRAINT "user_badge_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "user_badge_pkey" PRIMARY KEY ("user_id", "badge_id");

-- AlterTable
ALTER TABLE "user_contacts" DROP CONSTRAINT "user_contacts_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "user_contacts_pkey" PRIMARY KEY ("user_id", "contact_id");

-- CreateTable
CREATE TABLE "user_role" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_badge" ADD CONSTRAINT "user_badge_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "badge"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
