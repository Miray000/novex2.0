-- CreateTable
CREATE TABLE "Naming" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "naming" TEXT NOT NULL,
    "deeplink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Naming_pkey" PRIMARY KEY ("id")
);
