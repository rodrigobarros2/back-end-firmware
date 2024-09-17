/*
  Warnings:

  - You are about to drop the column `olt_type` on the `OltOutput` table. All the data in the column will be lost.
  - You are about to drop the column `ont_id` on the `OltOutput` table. All the data in the column will be lost.
  - You are about to drop the column `sn` on the `OltOutput` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `OltOutput` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OltOutput" DROP COLUMN "olt_type",
DROP COLUMN "ont_id",
DROP COLUMN "sn",
DROP COLUMN "state";
