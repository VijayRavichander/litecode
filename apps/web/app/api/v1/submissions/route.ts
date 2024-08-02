import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";

export async function GET(req: NextRequest){
    
    const problemId = req.nextUrl.searchParams.get('problemId');
    const userId = req.nextUrl.searchParams.get('userId');
    const limit =   Number(req.nextUrl.searchParams.get('limit'));
    const offset =  Number(req.nextUrl.searchParams.get('offset'));

    const res = await db.submissions.findMany({
        take: limit, // limit
        skip: offset, // offset
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

    return NextResponse.json(
        {
            res
        }, 
        {
            status: 200
        }
    );
}