import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";

type SubmissionResult = "TLE" | "COMPILATIONERROR" | "RUNTIMEERROR" | "REJECTED" | "INTERNALERROR" | "ACCEPTED";

export async function GET(req: NextRequest) {
    const pollTimes = 10;
    const submissionID = req.nextUrl.searchParams.get('submissionID');
    
    if (!submissionID) {
        return NextResponse.json({
            message: "Error"
        }, {
            status: 404
        });
    }


    for (let attempt = 0; attempt < pollTimes; attempt++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        let acceptedSubmissionCount = 0;

        const submission = await db.submission.findMany({
            where: {
                id: submissionID
            }
        });

        if (submission.length === 0) {
            return NextResponse.json({
                message: "Something Went Wrong",
                id: 19
            }, {
                status: 500
            });
        }

        for (const entry of submission) {
            const status = entry.status as SubmissionResult; // Type assertion

            switch (status) {
                case "TLE":
                    return NextResponse.json({
                        message: "Time Limit Exceeded",
                        id: 5
                    }, {
                        status: 200
                    });
                case "COMPILATIONERROR":
                    return NextResponse.json({
                        message: "Compilation Error",
                        id: 6
                    }, {
                        status: 200
                    });
                case "RUNTIMEERROR":
                    return NextResponse.json({
                        message: "Run Time Error",
                        id: 7
                    }, {
                        status: 200
                    });
                case "REJECTED":
                    return NextResponse.json({
                        message: "REJECTED",
                        id: 4
                    }, {
                        status: 200
                    });
                case "INTERNALERROR":
                    return NextResponse.json({
                        message: "INTERNALERROR",
                        id: 13
                    }, {
                        status: 200
                    });
                case "ACCEPTED":
                    acceptedSubmissionCount++;
                    if(acceptedSubmissionCount == submission.length){
                        return NextResponse.json({
                            message: "All Submissions Accepted",
                            id: 3
                        }, {
                            status: 200
                        });
                    }
                    break;
                default:
                    // handle unexpected statuses
                    continue
            }
        }
    }

        return NextResponse.json({
            message: "Internal Server Error",
            id: 21
        }, {
            status: 500
        });
}
