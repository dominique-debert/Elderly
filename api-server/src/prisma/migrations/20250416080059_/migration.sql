-- DropForeignKey
ALTER TABLE "activity" DROP CONSTRAINT "activity_category_id_fkey";

-- AlterTable
ALTER TABLE "activity" ALTER COLUMN "category_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "activity_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
