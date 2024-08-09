/*
  Warnings:

  - You are about to drop the column `code` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `contestId` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `judge0Token` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `languageId` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `memory` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `ContestSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `ContestSubmission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[problemId]` on the table `ContestProblem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[submissionId]` on the table `ContestSubmission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `submissionId` to the `ContestSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContestSubmission" DROP CONSTRAINT "ContestSubmission_problemId_fkey";

-- AlterTable
ALTER TABLE "ContestSubmission" DROP COLUMN "code",
DROP COLUMN "contestId",
DROP COLUMN "createdAt",
DROP COLUMN "judge0Token",
DROP COLUMN "languageId",
DROP COLUMN "memory",
DROP COLUMN "status",
DROP COLUMN "time",
ADD COLUMN     "submissionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'None';

-- CreateIndex
CREATE UNIQUE INDEX "ContestProblem_problemId_key" ON "ContestProblem"("problemId");

-- CreateIndex
CREATE UNIQUE INDEX "ContestSubmission_submissionId_key" ON "ContestSubmission"("submissionId");

-- AddForeignKey
ALTER TABLE "ContestSubmission" ADD CONSTRAINT "ContestSubmission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "ContestProblem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContestSubmission" ADD CONSTRAINT "ContestSubmission_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
