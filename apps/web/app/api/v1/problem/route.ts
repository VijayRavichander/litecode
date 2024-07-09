import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db";
import { getFullCode, getInputs, getOutputs } from "../../../lib/problem";
import axios from "axios"
import { Sumana } from "next/font/google";

const JUDGE0_URL = "http://localhost:2358"
const JUDGE0_API = process.env.JUDGE0_API_KEY
const JUDGE0_HOST = process.env.JUDGE0_HOST



export async function GET(req: NextRequest){

}

export async function POST(req: NextRequest){   

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
    
    // const submission = await db.submissions.create({
    //     data: {
    //         code, 
    //         languageId, 
    //         userId, 
    //         problemId,
    //         memory: -1,
    //         time: "null"
    //     }
    // })


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
        callback_url: "http://host.docker.internal:3005/judge0"
    }))


    const judgeReq = await axios.post(`${JUDGE0_URL}/submissions/batch`, {
        submissions
    }, 
    {headers: {
        'Content-Type' : "application/json", 
        // 'x-rapidapi-key': JUDGE0_API,
        // 'x-rapidapi-host': JUDGE0_HOST,
    }})

    console.log(judgeReq.data)
    // var tokens = ""

    // judgeReq.data.map((item, index) => (
    //     tokens = tokens + item.token + ","
    // ))
    
    // var tokenParams = tokens.slice(0, -1)

    // const judge0Response = await axios.get(`${JUDGE0_URL}/submissions/batch?tokens=${tokenParams}&fields=status,memory,time`, 
    // {headers: {
    //     // 'x-rapidapi-key': JUDGE0_API,
    //     // 'x-rapidapi-host': JUDGE0_HOST,
    // }})

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

