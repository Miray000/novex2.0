/*
  Warnings:

  - You are about to drop the `Naming` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Naming";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "KeitaroReport" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "campaign" TEXT NOT NULL,
    "rows" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KeitaroReport_pkey" PRIMARY KEY ("id")
);
