/*
  Warnings:

  - You are about to drop the column `formatoArquivo` on the `firmwares` table. All the data in the column will be lost.
  - Changed the type of `versao` on the `firmwares` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "firmwares" DROP COLUMN "formatoArquivo",
DROP COLUMN "versao",
ADD COLUMN     "versao" INTEGER NOT NULL;
