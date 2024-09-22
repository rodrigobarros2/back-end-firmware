/*
  Warnings:

  - You are about to drop the column `formato` on the `firmwares` table. All the data in the column will be lost.
  - Added the required column `formatoArquivo` to the `firmwares` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "firmwares" DROP COLUMN "formato",
ADD COLUMN     "formatoArquivo" TEXT NOT NULL;
