import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { LinkedButton } from "./LinkedButton";
import { db } from "../app/db";
import { Circle } from "lucide-react";

interface Problems {
  id: string;
  title: string;
  description: string;
  slug: string;
  solved: string;
  createdAt: Date;
}
export default async function ContestProblemTable({
  contestID,
}: {
  contestID: string;
}) {


  const contestProblems = await db.contestProblem.findMany({
    where: {
      contestId: contestID,
    },
    select: {
      problem: true,
    },
  });

  return (
    <Table>
      {/* <TableCaption>Contest Problems</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contestProblems &&
          contestProblems.map((problem, index) => (
            <ProblemRow
              key={index}
              problem={problem.problem}
              contestID={contestID}
            />
          ))}
      </TableBody>
    </Table>
  );
}

const ProblemRow = ({
  problem,
  contestID,
}: {
  problem: Problems;
  contestID: string;
}) => {

  return (

    <TableRow className="hover:bg-violet-200">
      <TableCell className="font-medium hover:text-violet-800">
        <LinkedButton href={`${contestID}/problem/${problem.id}`}>
          {problem.title}
        </LinkedButton>
      </TableCell>
      <TableCell>
        <Circle className="text-black-300"/> 
      </TableCell>
    </TableRow>

  );
};
