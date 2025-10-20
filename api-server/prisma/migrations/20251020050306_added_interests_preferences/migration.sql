-- CreateTable
CREATE TABLE "user_preferences" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "messages" BOOLEAN DEFAULT true,
    "forum" BOOLEAN DEFAULT true,
    "activities" BOOLEAN DEFAULT true,
    "email_updates" BOOLEAN DEFAULT true,
    "sms_updates" BOOLEAN DEFAULT false,
    "frequency" TEXT DEFAULT 'instant',
    "font_size" TEXT DEFAULT 'medium',
    "high_contrast" BOOLEAN DEFAULT false,
    "status_visibility" TEXT DEFAULT 'friends_only',
    "messages_from" TEXT DEFAULT 'friends_only',
    "data_sharing" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_interest" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "interest_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "user_interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_interestTouserInterest" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_interestTouserInterest_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_interestTouserInterest_B_index" ON "_interestTouserInterest"("B");

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_interest" ADD CONSTRAINT "user_interest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_interestTouserInterest" ADD CONSTRAINT "_interestTouserInterest_A_fkey" FOREIGN KEY ("A") REFERENCES "interest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_interestTouserInterest" ADD CONSTRAINT "_interestTouserInterest_B_fkey" FOREIGN KEY ("B") REFERENCES "user_interest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
