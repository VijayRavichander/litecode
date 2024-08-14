"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/ui/components/ui/pagination";

import { Progress } from "@repo/ui/components/ui/progress"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

interface SubmisionProps {
  userId: string;
  problemId: string;
}

interface Submissions {
  id: string;
  time: string;
  status: string;
  createdAt: string;
  testCase: any;
}

enum SubmissionResult {
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  PENDING = "PENDING",
  TLE = "TLE", // Time Limit Exceeded
  COMPILATIONERROR = "COMPILATIONERROR",
  RUNTIMEERROR = "RUNTIMEERROR",
  INTERNALERROR = "INTERNALERROR",
}

interface SubmissionStatusDecoratorProps {
  status: SubmissionResult;
}

const apiUrl = process.env.HOST_URL || ".";

export const SubmissionTable = ({problemId }: SubmisionProps) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(90)

  const session = useSession();
  console.log(session)

  useEffect(() => {
    const getSumbissions = async (problemId, limit, offset) => {
      const res = await axios.get(`/api/v1/submissions`, {
        params: {
          problemId,
          limit,
          offset,
        },
      });
      setSubmissions(res.data.res);
      setLoading(false);
    };
    getSumbissions(problemId, limit, offset);
  }, [offset]);

  const handlePageChange = (offset) => {
    setOffset(offset)
  };
  
  if (loading) {
    return <div className = "my-5 mx-auto">
        <div>Loading...</div>
        {/* <Progress className="bg-white" value={progress} /> */}
    </div>;
  }

  if (submissions.length == 0){
    return <div className = "mx-auto max-w-md text-lg text-white my-8">
      No Submissions Yet
    </div>
  }
  return (
    <div className="my-4">
      <Table>
        <TableHeader>
          <div className="text-xl font-bold my-4">SUBMISSION DETAILS</div>
        </TableHeader>
        <div className="bg-gray-800 rounded-xl min-w-full py-2">
          {submissions &&
            submissions.map((submission: Submissions) => (
                <SubmisionRow key={submission.id} submission={submission}/>
            ))}
        </div>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className = {`text-white ${offset == 0 ? "hidden" : ""}`} onClick={() => {handlePageChange(offset-10)}} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => {handlePageChange(0)}} >1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className = {`text-white ${offset == 0 && submissions.length < 8 ? "hidden" : ""}`} onClick={() => {handlePageChange(10)}} >2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className = {`text-white ${submissions.length < 8 ? "hidden" : ""}`} onClick={() => {handlePageChange(offset+10)}}  />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export function ConvertToLocaleTime (dateString: string){
  const date = new Date(dateString);
  return date.toLocaleString();
};




const SubmisionRow = ({ submission}: { submission: Submissions}) => {

  const [accepted, setAccepted] =  useState(0)
  const [total, setTotal] =  useState(0)

  useEffect(() => {
    if(submission.testCase){
      const accepted = submission?.testCase.filter((item) => item.status == "ACCEPTED").length
      setAccepted(accepted)
      setTotal(submission.testCase.length)
    }

  }, [])

  return (
    <div className="rounded my-4 mx-4 p-4 bg-gray-950 rounded-xl">
      <div>
        <div
          className={`flex justify-between items-center text-slate-300`}
        >
          <div>
            {/* <div>{submission.status}</div> */}
            <div>{SubmissionStatusDecorator(submission.status)}</div>
            <div>{ConvertToLocaleTime(submission.createdAt)}</div>
          </div>
          <div className="">
            <div>
              Test Cases Passed : {accepted} / {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
