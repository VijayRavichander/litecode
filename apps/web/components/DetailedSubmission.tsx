import { getSubmissionByID } from "../app/db/submission"

export const DetailedSubmission = async ({submissionID} : {submissionID: string}) => {
    
    const {userSubmission}  = await getSubmissionByID({submissionID});

    const acceptedTestCases = userSubmission?.testCase.filter((item) => item.status == "ACCEPTED")

    return <div>
        <div>
            {userSubmission?.problem.title}
        </div>
        <div>
            Submitted On : {String(userSubmission?.createdAt)}
        </div>
        <div>
            Accepted Test Cases: {acceptedTestCases?.length} / {userSubmission?.testCase.length}
        </div>
    </div>
}

export default DetailedSubmission;
