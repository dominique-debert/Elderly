/*
  Warnings:

  - The primary key for the `user_badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `user_skill` table. All the data in the column will be lost.
  - The required column `id` was added to the `user_badge` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "user_badge" DROP CONSTRAINT "user_badge_badge_id_fkey";

-- DropIndex
DROP INDEX "user_badge_badge_id_key";

-- AlterTable
ALTER TABLE "badge" ADD COLUMN     "userBadgeId" TEXT;

-- AlterTable
ALTER TABLE "user_badge" DROP CONSTRAINT "user_badge_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "user_badge_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user_skill" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "badge" ADD CONSTRAINT "badge_userBadgeId_fkey" FOREIGN KEY ("userBadgeId") REFERENCES "user_badge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
