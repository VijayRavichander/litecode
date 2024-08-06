import {db} from "."

// Get all the submissions of the user

export const getSubmissions = async ( { userID } : {userID : string}) => {

    const userSubmissions = await db.submission.findMany({
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

export const getSubmissionByID = async ( { submissionID } : {submissionID: string}) => {
    const userSubmissions = await db.submission.findMany({
        where: {
            id: submissionID
        }, select: {
            id: true, 
            status : true, 
            createdAt: true, 
            code: true, 
            problem: true
        },
    });
    return userSubmissions;
}
