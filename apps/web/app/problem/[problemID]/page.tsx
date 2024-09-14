"use client";

import CodeEditor from "../../../components/CodeEditor";
import ProblemStatement from "../../../components/ProblemStatement";
import { getProblem } from "../../db/problem";
import Resize from "../../../components/ResizableComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, TabsList, TabsTrigger } from "@ui/components/ui/tabs";
import EditorialStatment from "../../../components/Editorial";

export default function Page({
  params: { problemID },
}: {
  params: {
    problemID: string;
  };
}) {
  const [problem, setProblem] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("problem")

  useEffect(() => {
    const problemDetails = async () => {
      const res = await axios.get("/api/v1/getProblem", {
        params: {
          problemID: problemID,
        },
      });
      setProblem(res.data);
      setLoading(false);
    };

    problemDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800 text-white px-4">
      <div className=" rounded-xl mx-2">
        <Tabs defaultValue="problem" className="w-[400px] my-2 px-4" value={activeTab} onValueChange={(value) => {setActiveTab(value)}}
        >
          <TabsList className="h-8 bg-violet-500 text-black">
            <TabsTrigger value="problem" className="text-xs ">
              Description
            </TabsTrigger>
            <TabsTrigger value="editorial" className="text-xs">
              Editorial
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="w-full flex overflow-hidden">
        <div className="min-h-screen px-4">
          <Resize style={{ width: "100%", minWidth: "1px" }}>
            {activeTab == "problem" && 
            <ProblemStatement description={problem.description} />
            }
            {activeTab == "editorial" && 
            <EditorialStatment editorialDescription = {problem.description} />
            }
          </Resize>
        </div>
        <div className="min-h-screen bg-black px-4 my-2 rounded-sm w-full min-w-1">
          <CodeEditor dCode={problem.defaultCode} slug={problem.slug} />
        </div>
      </div>
    </div>
  );
}
