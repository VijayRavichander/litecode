import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";
import { getFullCode, getInputs, getOutputs } from "../../../lib/problem";
import axios from "axios"
import { rateLimit } from "../../../lib/rateLimiting";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";


const JUDGE0_URL = process.env.JUDGE0_URL
const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY
const CALLBACK_URL = process.env.CALLBACK_URL
const JUDGE0_HOST = process.env.JUDGE0_HOST


export async function POST(req: NextRequest){   

    try{

        const session = await getServerSession(authOptions)

        if (!session || !session?.user) {
            return NextResponse.json({}, { status: 401 });
        }

        var {code, languageId, problemId, slug} = await req.json();
        var languageExt;
                
        // create hashmap and remove if else
        if(languageId == "cpp"){
            languageId = 54
            languageExt = "cpp"
        }else{
            languageId = 93
            languageExt = "js"
    
        }

        const isAllowed = await rateLimit(session.user.id, 1, 30); 

        if(!isAllowed){
            return NextResponse.json({
                message: "Too Many Requests. Please wait before trying again"
            }, {
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
                userId: session.user.id, 
                code: userCode,
                languageId
            }
        })

        console.log(userCode)
        console.log(inputs)
        console.log(outputs)
        
        const submissionPayload = submissionBoilerPlate.inputs.map((input, index) => ({
            language_id: languageId, 
            source_code: userCode, 
            stdin: input, 
            expected_output: submissionBoilerPlate.outputs[index], 
            callback_url: CALLBACK_URL
        }))
        
        console.log(submissionPayload)

        // Post Request to JUDGE0 
        const judgeRes = await axios.post(`${JUDGE0_URL}/submissions/batch`, {
            submissions: submissionPayload
        }, 
        {headers: {
            'x-rapidapi-key': JUDGE0_API_KEY,
            'x-rapidapi-host': JUDGE0_HOST,
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

