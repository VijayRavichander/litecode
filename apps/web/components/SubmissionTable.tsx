"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@repo/ui/components/ui/table";
import { db } from "../app/db";
import { useEffect, useState } from "react";
import axios from "axios";
import { setFlagsFromString } from "v8";

interface SubmisionProps {
    userId: string, 
    problemId: string
    
}

interface Submissions {
    id: string,
    time: string,
    status: string, 
    createdAt: string
}


export const SubmissionTable = ({userId, problemId} : SubmisionProps) => {

    const [submissions, setSubmissions] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getSumbissions = async (userId, problemId) => {
            console.log(userId, problemId)

            const res = await axios.get("http://localhost:3001/api/v1/submissions", {
                params: {
                    userId, 
                    problemId
                }
            })
            setLoading(false);
            setSubmissions(res.data.res);
        }
        getSumbissions(userId, problemId)
    }, [])
    if(loading){
        return <div>Loading...</div>
    }
    return <Table>
    <TableCaption>Submissions</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Sumbission Time</TableHead>
        {/* <TableHead>Submision ID</TableHead> */}
        <TableHead>RunTime(ms)</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {submissions && submissions.map((submission: Submissions) => (
          <SubmisionRow key = {submission.id} submission={submission}/>
        ))}
      </TableBody>
    </Table>
}


const ConvertToLocaleTime = (dateString: string) =>{
    const date = new Date(dateString);
    return date.toLocaleString();
}
const SubmisionRow = ({submission} : {submission: Submissions}) => {
    return <TableRow>
    <TableCell>{ConvertToLocaleTime(submission.createdAt)}</TableCell>
    {/* <TableCell className="">{submission.id}</TableCell> */}
    <TableCell>{`${Number(submission.time) * 1000}`}</TableCell>
    <TableCell>{submission.status}</TableCell>
  </TableRow>
  }