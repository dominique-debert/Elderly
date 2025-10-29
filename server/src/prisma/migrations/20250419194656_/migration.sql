/*
  Warnings:

  - Made the column `category_id` on table `help_request` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "help_request" DROP CONSTRAINT "help_request_category_id_fkey";

-- AlterTable
ALTER TABLE "help_request" ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "help_request" ADD CONSTRAINT "help_request_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "help_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
