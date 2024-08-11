import { NextRequest, NextResponse } from "next/server";
import axios from "axios"
import { db } from "../../../../db";
import { getFullCode, getInputs,getOutputs } from "../../../../lib/problem";
import { rateLimit } from "../../../../lib/rateLimiting";
const JUDGE0_URL = process.env.JUDGE0_URL
const CALLBACK_URL = "https://cl-web-hook.vijaypreetham1.workers.dev/judge0"

export async function POST(req: NextRequest){   

    try{
        var {code, languageId, userId, problemId, slug, contestProblemID} = await req.json();
        var languageExt;
                
        // create hashmap and remove if else
        if(languageId == "cpp"){
            languageId = 54
            languageExt = "cpp"
        }else{
            languageId = 93
            languageExt = "js"
    
        }

        const isAllowed = rateLimit(userId, 1, 120);

        if(!isAllowed){
            return NextResponse.json({
                message: "Too Many Requests"
            },{
                status: 429
            })
        }

        const driveCode: string = await getFullCode({problemId, languageExt, slug});
        const userCode: string  = driveCode.replace("##USER_CODE_HERE##", code)

        // Get Inputs and Outputs
        const inputs = await getInputs({slug});
        const outputs = await getOutputs({slug});
        
        const submissionBoilerPlate = {
            userCode, 
            inputs,
            outputs
        }

        const submissionID = await db.submission.create({
            data: {
                problemId,
                userId, 
                code: userCode,
                languageId
            }
        })

        const contestSubmission = await db.contestSubmission.create({
            data: {
                problemId: contestProblemID,
                userId, 
                submissionId: submissionID.id
            }
        })


        const submissionPayload = submissionBoilerPlate.inputs.map((input, index) => ({
            language_id: languageId, 
            source_code: userCode, 
            stdin: input, 
            expected_output: submissionBoilerPlate.outputs[index], 
            callback_url: CALLBACK_URL
        }))
        
        // Post Request to JUDGE0 
        const judgeRes = await axios.post(`${JUDGE0_URL}/submissions/batch`, {
            submissions: submissionPayload
        }, 
        {headers: {
            'x-rapidapi-key': 'c16818d684msh01750f6dedefd81p184f87jsn32151e95c614',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        }})

        const testCaseTokens = judgeRes.data

        const testCaseIDs = []


        // Added the Submission Tokens to the DB
        for (const testCaseToken of testCaseTokens) {
            const testCaseDB = await db.testCase.create({
                data: {
                    judge0Token: testCaseToken.token,  
                    memory: "NA",
                    time: "NA", 
                    submissionId: submissionID.id,
                }
            })

            console.log(submissionID.id);

            testCaseIDs.push(testCaseDB.id);
        }


        return NextResponse.json({
            id: submissionID.id
        }, {
            status : 200
        })


    }
    catch(e){
        console.log(e)
        return NextResponse.json({
            message: "Error"
        }, {
            status : 500
        })
    }

}   

