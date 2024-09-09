import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "../../../db";
import { authOptions } from "../../../lib/auth";

export async function GET(req: NextRequest) {
    // Retrieve user session
    const session = await getServerSession(authOptions);

    // If no session or user, return 401 Unauthorized
    if (!session || !session.user) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Extract problemID from request URL parameters
    const problemID = req.nextUrl.searchParams.get('problemID');

    // If no problemID is provided, return a 404 error
    if (!problemID) {
        return NextResponse.json({ message: "Problem ID not found" }, { status: 404 });
    }

    try {
        // Fetch problem data from the database
        const problem = await db.problem.findUnique({
            where: {
                id: problemID,
            },
            select: {
                description: true,
                defaultCode: true,
                slug: true,
            },
        });

        // If the problem is not found, return a 404 error
        if (!problem) {
            return NextResponse.json({ message: "Problem not found" }, { status: 404 });
        }

        // Return the problem data in a JSON response
        return NextResponse.json(problem, { status: 200 });
    } catch (error) {
        // In case of any server error, return 500 status
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
