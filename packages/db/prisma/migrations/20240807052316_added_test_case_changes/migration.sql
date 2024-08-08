/*
  Warnings:

  - You are about to drop the column `userId` on the `TestCase` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "userId",
ALTER COLUMN "memory" SET DATA TYPE TEXT;
