"use client"

import CodeEditor from "../../../components/CodeEditor";
import ProblemStatement from "../../../components/ProblemStatement";
import { getProblem } from "../../db/problem";
import Resize from "../../../components/ResizableComponent";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Page({
  params : {problemID}
} : {
  params: {
    problemID: string
  }
}) {

  const [problem, setProblem] = useState({})
  const [loading, setLoading] = useState(true)

  // const problem = await getProblem({problemID});

  useEffect(() => {
    const problemDetails = async () => {
      const res = await axios.get("/api/v1/getProblem", {
        params: {
          problemID: problemID
        }
      })
      setProblem(res.data)
      setLoading(false)
    }

    problemDetails()
  }, [])

  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (
      <div className="flex flex-col min-h-screen bg-gray-700 text-white px-4">
        <div className="w-full flex overflow-hidden">
            <div className="min-h-screen px-4">
              <Resize style={{ width: "100%", minWidth: "1px" }}>
                <ProblemStatement description = {problem.description}/>
              </Resize>
            </div>
            <div className="min-h-screen bg-black px-4 my-2 rounded-sm w-full min-w-1">
                <CodeEditor dCode = {problem.defaultCode} slug = {problem.slug} />
            </div>
        </div>
      </div>
  );
}
