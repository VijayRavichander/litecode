import CodeEditor from "../../../components/CodeEditor";
import ProblemStatement from "../../../components/ProblemStatement";
import { getProblem } from "../../db/problem";

export default async function Page({
  params : {problemID}
} : {
  params: {
    problemID: string
  }
}) {
  const problem = await getProblem({problemID});
  
  return (
      <div className="flex flex-col min-h-screen">
        <div className="grid grid-cols-2">
            <div className="col-span-1 min-h-screen">
                <ProblemStatement description = {problem.description}/>
            </div>
            <div className="col-span-1 min-h-screen">
                <CodeEditor dCode = {problem.defaultCode} slug = {problem.slug} />
            </div>
        </div>
      </div>
  );
}
