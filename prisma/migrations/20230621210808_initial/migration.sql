-- CreateTable
CREATE TABLE "Clickstream" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "article" VARCHAR(255) NOT NULL,
    "referral_article" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Clickstream_pkey" PRIMARY KEY ("id")
);
