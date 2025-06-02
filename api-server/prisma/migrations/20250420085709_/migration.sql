/*
  Warnings:

  - You are about to drop the column `response_date` on the `survey_response` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "survey_response" DROP COLUMN "response_date",
ADD COLUMN     "responseDate" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP;
