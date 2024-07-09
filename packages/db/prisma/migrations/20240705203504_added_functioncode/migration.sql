/*
  Warnings:

  - Added the required column `fullCode` to the `Problem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `functionCode` to the `Problem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "fullCode" TEXT NOT NULL,
ADD COLUMN     "functionCode" TEXT NOT NULL;
