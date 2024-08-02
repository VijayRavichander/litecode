/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `DefaultCode` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DefaultCode_problemId_key";

-- CreateIndex
CREATE UNIQUE INDEX "DefaultCode_code_key" ON "DefaultCode"("code");
