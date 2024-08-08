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

const apiUrl = process.env.HOST_URL || ".";

export const SubmissionTable = ({ userId, problemId }: SubmisionProps) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(13)


  useEffect(() => {
    const getSumbissions = async (userId, problemId, limit, offset) => {
      const res = await axios.get(`/api/v1/submissions`, {
        params: {
          userId,
          problemId,
          limit,
          offset,
        },
      });
      setLoading(false);
      setSubmissions(res.data.res);
    };
    getSumbissions(userId, problemId, limit, offset);
  }, [offset]);

  const handlePageChange = (offset) => {
    setOffset(offset)
  };
  
  if (loading) {
    return <div className = "my-5 mx-auto max-w-md">
        <div>Loading...</div>
        <Progress value={progress} />
    </div>;
  }

  if (submissions.length == 0){
    return <div className = "">
      No Submissions Yet
    </div>
  }
  return (
    <div className="my-4">
      <Table>
        <TableHeader>
          <TableRow className="text-xl font-bold text-gray-700">SUBMISSION DETAILS</TableRow>
        </TableHeader>
        <TableBody>
          {submissions &&
            submissions.map((submission: Submissions) => (
                <SubmisionRow key={submission.id} submission={submission}/>
            ))}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious className = {`${offset == 0 ? "hidden" : ""}`} onClick={() => {handlePageChange(offset-10)}} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => {handlePageChange(0)}} >1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className = {`${offset == 0 && submissions.length < 8 ? "hidden" : ""}`} onClick={() => {handlePageChange(10)}} >2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className = {`${submissions.length < 8 ? "hidden" : ""}`} onClick={() => {handlePageChange(offset+10)}}  />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

const ConvertToLocaleTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const SubmisionRow = ({ submission}: { submission: Submissions}) => {

  return (
    <TableRow className="rounded m-3">
      <TableCell>
      {/* <Link href={`/submission/${submission.id}`}> */}
        <div
          className={`flex justify-between items-center ${submission.status == "ACCEPTED" ? "text-green-400" : "text-red-400"}`}
        >
          <div>
            <div>{submission.status}</div>
            <div>{ConvertToLocaleTime(submission.createdAt)}</div>
          </div>
          <div>
            Accepted
          </div>
          <div>
            {submission?.testCase.filter((item) => item.status == "ACCEPTED").length / submission.testCase.length()}
          </div>
          {/* <div>{`${Number(submission.time) * 1000} ms`}</div> */}
          {/* <div>{submission.id}</div> */}
        </div>
       {/* </Link> */}
      </TableCell>
    </TableRow>
  );
};
