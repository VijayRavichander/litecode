/*
  Warnings:

  - The values [ACCEPETED] on the enum `SubmissionResult` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SubmissionResult_new" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING');
ALTER TABLE "Submissions" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Submissions" ALTER COLUMN "status" TYPE "SubmissionResult_new" USING ("status"::text::"SubmissionResult_new");
ALTER TYPE "SubmissionResult" RENAME TO "SubmissionResult_old";
ALTER TYPE "SubmissionResult_new" RENAME TO "SubmissionResult";
DROP TYPE "SubmissionResult_old";
ALTER TABLE "Submissions" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;
