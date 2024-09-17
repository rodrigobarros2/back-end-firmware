/*
  Warnings:

  - You are about to drop the `Firmwares` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Firmwares";

-- CreateTable
CREATE TABLE "firmwares" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "firmwares_pkey" PRIMARY KEY ("id")
);
