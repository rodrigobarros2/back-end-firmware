/*
  Warnings:

  - You are about to drop the column `port` on the `OltOutput` table. All the data in the column will be lost.
  - You are about to drop the column `slot` on the `OltOutput` table. All the data in the column will be lost.
  - Added the required column `email` to the `OltOutput` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `OltOutput` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OltOutput" DROP COLUMN "port",
DROP COLUMN "slot",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
