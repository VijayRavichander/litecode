import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { getProblems } from "../app/db/problem"
import { LinkedButton } from "./LinkedButton";
 
interface Problems{
  id: string, 
  title:string, 
  description: string,
  slug: string, 
  solved: string, 
  createdAt: Date, 
}


export default async function ProblemTable() {

  const problems : Problems[] = await getProblems();
  console.log(problems)

  return (<Table>
      <TableCaption>Problems</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Difficulty</TableHead>
          <TableHead>Acceptance Rate</TableHead>
          <TableHead>Solution</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems && problems.map((problem: Problems) => (
          <ProblemRow key = {problem.id} problem={problem}/>
        ))}
      </TableBody>
    </Table>
  );
}


const ProblemRow = ({problem} : {problem: Problems}) => {
  return <TableRow>
  <TableCell className="font-medium underline"><LinkedButton href = {`/problem/${problem.id}`}>{problem.title}</LinkedButton></TableCell>
  <TableCell>Medium</TableCell>
  <TableCell>80%</TableCell>
  <TableCell>Link</TableCell>
</TableRow>
}