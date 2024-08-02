import {db} from "."

// Get all the submissions of the user

export const getSubmissions = async ( { userID } : {userID : string}) => {
    const userSubmissions = await db.submissions.findMany({
        take: 8, 
        where: {
            userId: userID 
        }, select: {
            status : true, 
            createdAt: true, 
            code: true, 
            problem: true
        },
        orderBy: {
            createdAt:  'desc'
        } 
    });
    return userSubmissions;
}
