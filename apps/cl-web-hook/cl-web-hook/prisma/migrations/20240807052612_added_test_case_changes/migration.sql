/*
  Warnings:

  - You are about to drop the column `judge0Token` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `memory` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "judge0Token",
DROP COLUMN "memory",
DROP COLUMN "time";

-- CreateTable
CREATE TABLE "TestCase" (
    "id" TEXT NOT NULL,
    "judge0Token" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "status" "SubmissionResult" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submissionId" TEXT NOT NULL,

    CONSTRAINT "TestCase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
