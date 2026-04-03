/*
  Warnings:

  - You are about to drop the column `two_factor_authentication` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "two_factor_authentication";
