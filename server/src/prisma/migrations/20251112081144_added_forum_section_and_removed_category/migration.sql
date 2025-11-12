-- DropForeignKey
ALTER TABLE "forum_topic" DROP CONSTRAINT "forum_topic_category_id_fkey";

-- CreateTable
CREATE TABLE "forum_section" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "forum_section_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "forum_topic" ADD CONSTRAINT "forum_topic_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "forum_section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
