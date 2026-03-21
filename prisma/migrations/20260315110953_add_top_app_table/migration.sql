-- CreateTable
CREATE TABLE "TopApp" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "app_title" TEXT NOT NULL,
    "spend" DOUBLE PRECISION NOT NULL,
    "clicks" INTEGER NOT NULL,
    "installs" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "event" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TopApp_pkey" PRIMARY KEY ("id")
);
