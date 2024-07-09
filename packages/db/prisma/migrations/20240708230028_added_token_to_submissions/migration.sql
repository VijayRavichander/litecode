/*
  Warnings:

  - Added the required column `judge0Token` to the `Submissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submissions" ADD COLUMN     "judge0Token" TEXT NOT NULL;
