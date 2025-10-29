-- AlterTable
ALTER TABLE "contact_request" ADD COLUMN     "message" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
