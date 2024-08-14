import {db} from "."

// Get all the submissions of the user

export const getSubmissions = async ( { profileID } : {profileID : string}) => {

    const userSubmissions = await db.submission.findMany({
        take: 8, 
        where: {
            userId: profileID 
        }, select: {
            status : true, 
            createdAt: true, 
            code: true, 
            problem: true,
            testCase: true
        },
        orderBy: {
            createdAt:  'desc'
        } 
    });
    return userSubmissions;
}

export const getSubmissionByID = async ( { submissionID } : {submissionID: string}) => {


    const userSubmission = await db.submission.findFirst({
        where: {
            id: submissionID
        }, select: {
            id: true, 
            status : true, 
            createdAt: true, 
            code: true, 
            problem: true,
            testCase: true
        },
    });

    return {userSubmission};
}
