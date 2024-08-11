import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../db";
export async function GET(req: NextRequest){
    
    const contestProblemID = req.nextUrl.searchParams.get('contestProblemID');
    const userId = req.nextUrl.searchParams.get('userId');
    const limit =   Number(req.nextUrl.searchParams.get('limit'));
    const offset =  Number(req.nextUrl.searchParams.get('offset'));


    const res = await db.contestSubmission.findMany({
        take: limit, // limit
        skip: offset, // offset
        where: {
            problemId: contestProblemID,
            userId,
        }, 
        select: {
            submissionId: true,
            submission: true
        }, 
    })

    return NextResponse.json(
        {
            res
        }, 
        {
            status: 200
        }
    );
}