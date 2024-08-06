import { getSubmissionByID } from "../app/db/submission"

export const DetailedSubmission = async ({submissionID} : {submissionID: string}) => {
    
    const submission = await getSubmissionByID(submissionID);

    console.log(submission)

    return <div>
        {submission[0].id}
    </div>
}

export default DetailedSubmission;
