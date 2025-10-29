-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_categoryChapterId_fkey";

-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_categoryTypeId_fkey";

-- CreateTable
CREATE TABLE "_categoryTocategoryType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_categoryTocategoryType_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_categoryTocategoryChapter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_categoryTocategoryChapter_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_categoryTocategoryType_B_index" ON "_categoryTocategoryType"("B");

-- CreateIndex
CREATE INDEX "_categoryTocategoryChapter_B_index" ON "_categoryTocategoryChapter"("B");

-- AddForeignKey
ALTER TABLE "_categoryTocategoryType" ADD CONSTRAINT "_categoryTocategoryType_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoryTocategoryType" ADD CONSTRAINT "_categoryTocategoryType_B_fkey" FOREIGN KEY ("B") REFERENCES "category_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoryTocategoryChapter" ADD CONSTRAINT "_categoryTocategoryChapter_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoryTocategoryChapter" ADD CONSTRAINT "_categoryTocategoryChapter_B_fkey" FOREIGN KEY ("B") REFERENCES "category_chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
