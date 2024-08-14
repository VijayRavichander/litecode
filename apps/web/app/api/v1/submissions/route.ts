import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
export async function GET(req: NextRequest){

    const session = await getServerSession(authOptions);

    if (!session || !session?.user) {
        return NextResponse.json({}, { status: 401 });
    }

    const userId = session?.user.id

    const problemId = req.nextUrl.searchParams.get('problemId');
    const limit =   Number(req.nextUrl.searchParams.get('limit'));
    const offset =  Number(req.nextUrl.searchParams.get('offset'));

    const res = await db.submission.findMany({
        take: limit, // limit
        skip: offset, // offset
        where: {
            problemId,
            userId,
        }, 
        select: {
            id: true,
            createdAt: true,
            status: true,
            testCase: true, 
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