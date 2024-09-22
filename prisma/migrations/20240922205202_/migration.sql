/*
  Warnings:

  - You are about to drop the column `brand` on the `firmwares` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `firmwares` table. All the data in the column will be lost.
  - Added the required column `comoAtualizar` to the `firmwares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `firmwares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formato` to the `firmwares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `firmwares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `firmwares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `versao` to the `firmwares` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "firmwares" DROP COLUMN "brand",
DROP COLUMN "name",
ADD COLUMN     "comoAtualizar" TEXT NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "formato" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "modelo" TEXT NOT NULL,
ADD COLUMN     "versao" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "paymentMethod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_sessionId_key" ON "payments"("sessionId");
