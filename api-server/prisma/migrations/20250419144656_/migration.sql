-- CreateTable
CREATE TABLE "offline_user" (
    "user_id" TEXT NOT NULL,
    "cached_data" JSON,
    "last_sync" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "offline_user_pkey" PRIMARY KEY ("user_id")
);
