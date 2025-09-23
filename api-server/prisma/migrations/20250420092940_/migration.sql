/*
  Warnings:

  - Made the column `category_id` on table `urban_issue_report` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "urban_issue_report" DROP CONSTRAINT "urban_issue_report_category_id_fkey";

-- AlterTable
ALTER TABLE "urban_issue_report" ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "urban_issue_report" ADD CONSTRAINT "urban_issue_report_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "issue_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
