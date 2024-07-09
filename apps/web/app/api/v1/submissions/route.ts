import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";

export async function GET(req: NextRequest){
    
    const problemId = req.nextUrl.searchParams.get('problemId');
    const userId = req.nextUrl.searchParams.get('userId');
    const res = await db.submissions.findMany({
        where: {
            problemId,
            userId,
        }, 
        select: {
            id: true,
            createdAt: true,
            time: true,
            status: true,
        }, 
        orderBy: {
            createdAt:  'desc'
        }   
    })
    console.log(res)

    return NextResponse.json(
        {
            res
        }, 
        {
            status: 200
        }
    );
}