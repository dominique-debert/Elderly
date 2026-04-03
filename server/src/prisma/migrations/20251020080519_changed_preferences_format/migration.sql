/*
  Warnings:

  - You are about to drop the column `frequency` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `messages_from` on the `user_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `status_visibility` on the `user_preferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_preferences" DROP COLUMN "frequency",
DROP COLUMN "messages_from",
DROP COLUMN "status_visibility",
ADD COLUMN     "frequency_daily" BOOLEAN DEFAULT false,
ADD COLUMN     "frequency_instant" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "messages_from_everybody" BOOLEAN DEFAULT true,
ADD COLUMN     "messages_from_friends" BOOLEAN DEFAULT true,
ADD COLUMN     "messages_from_no_one" BOOLEAN DEFAULT false,
ADD COLUMN     "status_visibility_everybody" BOOLEAN DEFAULT true,
ADD COLUMN     "status_visibility_friends" BOOLEAN DEFAULT true,
ADD COLUMN     "status_visibility_no_one" BOOLEAN DEFAULT false,
ALTER COLUMN "font_size" SET DEFAULT 'normal';
