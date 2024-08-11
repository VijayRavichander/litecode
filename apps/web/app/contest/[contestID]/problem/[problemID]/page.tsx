import ContestCodeEditor from "../../../../../components/ContestCodeEditor"
import ProblemStatement from "../../../../../components/ProblemStatement"
import { db } from "../../../../db"

export default async function Page ({
    params : {
        problemID
    }
  } : {
    params: {
      problemID: string
    }
  }) {
    
  const contestProblem = await db.contestProblem.findFirst({
    where: {
      problemId: problemID
    }, 
    select: {
      id: true,
      problem: {
        select: {
          defaultCode: true, 
          description: true,
          slug: true
        }
      }
    }
  })

  if(!contestProblem){ 
    return <div>
      Something Went Wrong
    </div>
  }
    return <div className="flex flex-col min-h-screen">
    <div className="grid grid-cols-2 bg-gray-700">
        <div className="col-span-1 min-h-screen ">
            <ProblemStatement description = {contestProblem?.problem.description}/>
        </div>
        <div className="col-span-1 min-h-screen">
            <ContestCodeEditor dCode = {contestProblem.problem.defaultCode} slug = {contestProblem.problem.slug} contestProblem = {contestProblem}/>
        </div>
    </div>
  </div>
}