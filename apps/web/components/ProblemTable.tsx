import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { getProblems } from "../app/db/problem";
import { LinkedButton } from "./LinkedButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import { redirect } from "next/navigation";
import { Check, CircleDot } from "lucide-react";
interface Problems {
  id: string;
  title: string;
  description: string;
  slug: string;
  solved: string;
  createdAt: Date;
  submissions: Submission[]
}

interface Submission {
  id: string; 
  problemId: string; 
  userId: string; 
  code: string; 
  languageId: number; 
  status: string; 
  createdAt: Date;
}

interface User {
  id: string;
  jwtToken: string;
  email: string;

}

export default async function ProblemTable() {
  const problems: Problems[] = await getProblems();
  const session = await getServerSession(authOptions);
  
  if(!session || !session?.user){
    redirect("/");
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Difficulty</TableHead>
          <TableHead>Acceptance Rate</TableHead>
          <TableHead>Solution</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems &&
          problems.map((problem: Problems) => (
            <ProblemRow key={problem.id} problem={problem} user={session.user.id} />
          ))}
      </TableBody>
    </Table>
  );
}

const ProblemRow = ({ problem, user }: { problem: Problems, user: string }) => {

  const acceptedSolutions = problem.submissions.filter((item, index) => (item.status == "ACCEPTED")).length;
  const totalSolutions = problem.submissions.length;
  const acceptedPercentage = totalSolutions != 0 ? (acceptedSolutions / totalSolutions) : 0
  const difficulty = acceptedPercentage < 0.20 ? "Hard" : acceptedPercentage < 0.50 ? "Medium" : "Easy"
  const solved = problem.submissions.filter((item, index) => (item.userId == user && item.status == "ACCEPTED"))
  const attempted = problem.submissions.filter((item, index) => (item.userId == user && item.status != "ACCEPTED"))

  return (
    <TableRow>
      <TableCell className={`${solved.length != 0 ? "text-green-300" : attempted.length != 0 ? "text-yellow-300" : ""} text-lg font-bold hover:text-violet-800`}>
        <LinkedButton className = "flex items-center" href={`/problem/${problem.id}`} >
         {problem.title}<span className="px-2">{solved.length != 0 ? <Check /> : attempted.length != 0 ? <CircleDot /> : <></>}</span>
        </LinkedButton>
      </TableCell>
      <TableCell
      className={`${difficulty == "Easy" ? "text-green-500" : difficulty == "Medium" ? "text-yellow-500" : "text-red-500"}`}
      >
        {difficulty}
      </TableCell>
      <TableCell
      className="font-thin"
      >{(acceptedPercentage * 100).toFixed(2)}%</TableCell>
      <TableCell>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="green"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </TableCell>
    </TableRow>
  );
};
