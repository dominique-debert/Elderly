/*
  Warnings:

  - You are about to drop the column `emergency_contact_name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_contact_phone` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "emergency_contact_name",
DROP COLUMN "emergency_contact_phone";
