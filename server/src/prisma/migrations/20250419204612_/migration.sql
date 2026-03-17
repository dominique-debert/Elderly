/*
  Warnings:

  - Made the column `name` on table `local_service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `local_service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `nutritional_advice` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "local_service" DROP CONSTRAINT "local_service_category_id_fkey";

-- DropForeignKey
ALTER TABLE "nutritional_advice" DROP CONSTRAINT "nutritional_advice_category_id_fkey";

-- AlterTable
ALTER TABLE "local_service" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "nutritional_advice" ALTER COLUMN "season" DROP NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "local_service" ADD CONSTRAINT "local_service_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "service_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritional_advice" ADD CONSTRAINT "nutritional_advice_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "nutritional_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
