import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";

export async function GET(req: NextRequest){

    var pollTimes = 10;

    console.log(req.nextUrl.searchParams)

    const submissionID = req.nextUrl.searchParams.get('submissionID');

    console.log(submissionID)

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

        console.log(submission)


        if(submission.status == "REJECTED"){
            return NextResponse.json({
                message: "REJECTED"
            }, {
                status: 200
            })
        }

        if(submission.status  == "ACCEPTED"){
            return NextResponse.json({
                message: "ACCEPTED"
            }, {
                status: 200
            })
        }
        pollTimes = pollTimes - 1;
    }


    return NextResponse.json({
        message: "Error"
    }, {
        status: 404
    })
}