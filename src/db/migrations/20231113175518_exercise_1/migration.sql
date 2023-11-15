/*
  Warnings:

  - Added the required column `vestingEnd` to the `Allocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingPeriod` to the `Allocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vestingStart` to the `Allocation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TYPE" AS ENUM ('SECONDS', 'DAILY', 'MONTHLY');

-- AlterTable
ALTER TABLE "Allocation" ADD COLUMN     "vestingEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vestingPeriod" "TYPE" NOT NULL,
ADD COLUMN     "vestingStart" TIMESTAMP(3) NOT NULL;
