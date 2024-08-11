"use client";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";
import { Loader2 } from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@ui/components/ui/tabs";
import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { SubmissionTable } from "./SubmissionTable";
import { useToast } from "@ui/components/ui/use-toast"
import { ContestSubmissionTable } from "./ContestSubmissionTable";

type CodeEditorProps = {
  dCode: defaultCode[];
};

type defaultCode = {
  id: string,
  languageId: number, 
  problemId: string, 
  code: string, 
  createdAt: Date,
  updatedAt: Date
}

const apiUrl = process.env.HOST_URL || "."
const TEST_USER_ID = "test"

export default function ContestCodeEditor({dCode, slug, contestProblem} : {dCode: CodeEditorProps, slug: string, contestProblem: any}) {

  const [activeTab, setActiveTab] = useState("Submit");

  return (
    <div>
      <div>
      <div className="px-2 text-lg font-bold text-violet-600 border-b">Code&lt;&gt;</div>
      <div className="mt-2">
        <Tabs
          defaultValue="Submit"
          className="min-w-max"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList>
            <TabsTrigger value="Submit">Submit</TabsTrigger>
            <TabsTrigger value="Submissions">Submissions</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className = {`${activeTab == "Submit" ? "" : "hidden"}`}>
          <Submit defaultCode={dCode} slug = {slug} setActiveTab = {setActiveTab} contestProblem = {contestProblem}/>
        </div>
        <div>
          {activeTab == "Submissions" && <Submissions userId={TEST_USER_ID} contestProblemID={contestProblem.id}/>}
        </div>
      </div>
      </div>
    </div>
  );
}


function Submissions({userId, contestProblemID} : {userId: string, contestProblemID: string}) {
    return <ContestSubmissionTable userId={userId} contestProblemID={contestProblemID}/>;
}


  function Submit ({defaultCode, slug, setActiveTab, contestProblem} : {defaultCode: defaultCode[], slug: string, setActiveTab: any, contestProblem: any}) {

    const [code, setCode] = useState('');
    const [editorLanguage, setEditorLanguage] = useState("cpp");
    const [loading, setLoading] = useState(true)
    const [submissionLoading, setSubmissionLoading] = useState(false)
    const [contest, setContest] = useState({})
    const { toast } = useToast()
    
    useEffect(() => {
      const getFunctionCode = async () => {
        setCode(defaultCode[0].code)
        setContest(contestProblem)
        setLoading(false)
        console.log(contest)
      }
      getFunctionCode()
    }, [])
    
    if(loading){
      return <div className="mx-auto">Loading..</div>
    }
  
    const onSubmit = async () => {
      setSubmissionLoading(true);
      
      const toastMessages = {
        3: { msg: "Accepted", variant: "accept" },
        4: { msg: "Rejected", variant: "destructive" },
        5: { msg: "Time Limit Exceeded", variant: "destructive" },
        6: { msg: "Compilation Error", variant: "destructive" },
        7: { msg: "Run Time Error", variant: "destructive" },
        13: { msg: "Check Again Later", variant: "destructive" },
      };
    
      try {
        const submissionId = await axios.post(`/api/v1/contest/problem`, {
          userId: TEST_USER_ID,
          code: code,
          languageId: editorLanguage,
          problemId: defaultCode[0].problemId,
          contestProblemID: contest.id, 
          slug: slug,
        });
  
        console.log(submissionId.data.id)
        
        const params = {
          submissionID: submissionId.data.id, 
        };
  
        const submissionStatus = await axios.get(`/api/v1/submission`, {params})
  
        const toastDetails = toastMessages[submissionStatus.data.id] || {};
        
        // Change the state of Submit Button
        setSubmissionLoading(false);
        
        // Trigger the Toast
        if (toastDetails.msg) {
          toast({
            variant: toastDetails.variant,
            title: toastDetails.msg,
          });
        }
  
        // Change to Submission Tab
        setActiveTab("Submissions")
  
      } catch (error) {
        setSubmissionLoading(false);
        if(error.response && error.response.status == 429){
          toast({
            variant: "destructive", 
            title: "Too Many Requests. Please Try Again in 2 Mintues"
          })
        }else{
          toast({
            variant: "destructive",
            title: "An error occurred",
          });
        }
      }
    };
  
    return (
      <div>
        <div className="rounded-xl">
          <div className="my-2  text-black">
            <p className="text-base font-bold">Language</p>
            <Select
              value={editorLanguage}
              defaultValue="cpp"
              onValueChange={(value) => {
                setEditorLanguage(value)
                if(value == "javascript"){
                  setCode(defaultCode[1].code)
                }else{
                  setCode(defaultCode[0].code)
                }
              }}
            >
              <SelectTrigger className="min-w-max">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="max-w-2xl">
                <SelectItem value="cpp">CPP</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Editor
                height={"50vh"}
                value={`${code}`}
                theme="vs-dark"
                language={editorLanguage}
                onMount={() => {}}
                options={{
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                }}
                onChange={(value) => {
                  //@ts-ignore
                  setCode(value);
                }}
                defaultLanguage="cpp"
              />
          </div>
          <div className="flex">
          <div className="my-2">
            {
              submissionLoading ? <Button className= "bg-violet-700" onClick={onSubmit} disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
                </Button>
                : 
                <Button className= "bg-violet-700" onClick={onSubmit}>
                  Submit
                </Button>
            }
          </div>
          </div>
        </div>
      </div>
    );
  }