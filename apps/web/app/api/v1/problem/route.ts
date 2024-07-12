import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";
import { getFullCode, getInputs, getOutputs } from "../../../lib/problem";
import axios from "axios"

const JUDGE0_URL = process.env.JUDGE0_URL

export async function POST(req: NextRequest){   

    try{
        var {code, languageId, userId, problemId, slug} = await req.json();
        var languageExt;
    
        // create hashmap and remove if else
        if(languageId == "cpp"){
            languageId = 54
            languageExt = "cpp"
        }else{
            languageId = 93
            languageExt = "js"
    
        }

        const driveCode: string = await getFullCode({problemId, languageExt, slug});
        const fullCode  = driveCode.replace("##USER_CODE_HERE##", code)

        const inputs = await getInputs({slug});
        const outputs = await getOutputs({slug});
    
        const submissionMain = {
            fullCode, 
            inputs,
            outputs
        }
    
        const submissions = submissionMain.inputs.map((input, index) => ({
            language_id: languageId, 
            source_code: fullCode, 
            stdin: input, 
            expected_output: submissionMain.outputs[index], 
            callback_url: "/judge0"
        }))
    
    
        const judgeReq = await axios.post(`${JUDGE0_URL}/submissions/batch`, {
            submissions
        }, 
        {headers: {
            'Content-Type' : "application/json", 
        }})
    
        console.log(judgeReq.data)
    
        const submission = await db.submissions.create({
            data: {
                code, 
                languageId, 
                judge0Token: judgeReq.data[0].token, 
                userId, 
                problemId,
                memory: -1,
                time: "NA", 
                status: "PENDING"
            }
        })
    
        return NextResponse.json({
            id: submission.id
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

