/*
  Warnings:

  - You are about to drop the `OltOutput` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OltOutput";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
