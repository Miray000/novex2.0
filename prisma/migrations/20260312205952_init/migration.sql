-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "rows" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
