import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";


type SubmissionResult = "TLE" | "COMPILATIONERROR" | "RUNTIMEERROR" | "REJECTED" | "INTERNALERROR" | "ACCEPTED";

export async function GET(req: NextRequest) {

    const session = await getServerSession(authOptions);

    if (!session || !session?.user) {
        return NextResponse.json({}, { status: 401 });
    }

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


        const testCase = await db.testCase.findMany({
            where: {
                submissionId: submissionID
            }
        });


        if (!testCase) {
            return NextResponse.json({
                message: "Something went wrong"
            }, {
                status: 404
            });
        }

        console.log(testCase)

        for (const entry of testCase) {
            const status = entry.status as SubmissionResult; // Type assertion

            switch (status) {
                case "TLE":

                    await db.submission.update({
                        where: {
                            id: submissionID
                        }, 
                        data: {
                            status: "TLE"
                        }
                    });

                    return NextResponse.json({
                        message: "Time Limit Exceeded",
                        id: 5
                    }, {
                        status: 200
                    });


                case "COMPILATIONERROR":
                    await db.submission.update({
                        where: {
                            id: submissionID
                        }, 
                        data: {
                            status: "COMPILATIONERROR"
                        }
                    });

                    return NextResponse.json({
                        message: "Compilation Error",
                        id: 6
                    }, {
                        status: 200
                    });



                case "RUNTIMEERROR":

                    await db.submission.update({
                        where: {
                            id: submissionID
                        }, 
                        data: {
                            status: "RUNTIMEERROR"
                        }
                    });

                    return NextResponse.json({
                        message: "Run Time Error",
                        id: 7
                    }, {
                        status: 200
                    });


                case "REJECTED":

                    await db.submission.update({
                        where: {
                            id: submissionID
                        }, 
                        data: {
                            status: "REJECTED"
                        }
                    });

                    return NextResponse.json({
                        message: "REJECTED",
                        id: 4
                    }, {
                        status: 200
                    });

                case "INTERNALERROR":
                    await db.submission.update({
                        where: {
                            id: submissionID
                        }, 
                        data: {
                            status: "INTERNALERROR"
                        }
                    });
                    
                    return NextResponse.json({
                        message: "INTERNALERROR",
                        id: 13
                    }, {
                        status: 200
                    });


                case "ACCEPTED":
                    acceptedSubmissionCount++;
                    if(acceptedSubmissionCount == testCase.length){
                        await db.submission.update({
                            where: {
                                id: submissionID
                            }, 
                            data: {
                                status: "ACCEPTED"
                            }
                        });

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
