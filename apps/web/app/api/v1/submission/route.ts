import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";

export async function GET(req: NextRequest){

    var pollTimes = 10;

    const submissionID = req.nextUrl.searchParams.get('submissionID');

    if(!submissionID){

        return NextResponse.json({
            message: "Error"
        }, {
            status: 404
        })
    }

    while(pollTimes > 0){

        await new Promise((resolve) => (setTimeout(resolve, 2000)))

        const submission = await db.submissions.findUnique({
            where: {
                id: submissionID
            }
        })


        if(submission.status == "REJECTED"){
            return NextResponse.json({
                message: "REJECTED",
                id: 1
            }, {
                status: 200
            })
        }

        if(submission.status  == "ACCEPTED"){
            return NextResponse.json({
                message: "ACCEPTED",
                id: 3
            }, {
                status: 200
            })
        }
        pollTimes = pollTimes - 1;
    }


    return NextResponse.json({
        message: "Error",
        id: 4
    }, {
        status: 404
    })
}