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

function Submit ({defaultCode, slug} : {defaultCode: defaultCode[], slug: string}) {

  const [code, setCode] = useState('');
  const [runCode, setRunCode] = useState('');
  const [editorLanguage, setEditorLanguage] = useState("cpp");
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()
  const [submissionLoading, setSubmissionLoading] = useState(false)
  const [runningLoading, setRunningLoading] = useState(false)

  
  useEffect(() => {
    const getFunctionCode = async () => {
      setCode(defaultCode[0].code)
      setLoading(false)
    }
    getFunctionCode()
  }, [])
  
  if(loading){
    return <div>Loading..</div>
  }

  const onRun = async () => {

    setRunningLoading(true)
    
    console.log(runCode.toString())
    const singleSubmission = await axios.post(`/api/v1/problem`, {
      userId: TEST_USER_ID, 
      code: runCode,
      languageId: editorLanguage, 
      problemId: defaultCode[0].problemId, 
      slug: slug
    })

    setRunningLoading(false)
    
  }

  const onSubmit = async () => {

    setSubmissionLoading(true)
    
    const submissionId = await axios.post(`/api/v1/problem`, {
      userId: TEST_USER_ID, 
      code: code,
      languageId: editorLanguage, 
      problemId: defaultCode[0].problemId, 
      slug: slug
    })

    const sumbissionStatusRes = []
    for(const id of submissionId.data.id){
      const submissionStatus = await axios.get(`/api/v1/submission`, {
        params: {submissionID: id}
      })

      console.log(submissionStatus.data)

      if(submissionStatus.data.id == 3){
        sumbissionStatusRes.push(1)
      }else if(submissionStatus.data.id == 1){
        sumbissionStatusRes.push(0)
      }
      else{
        sumbissionStatusRes.push(-2)
      }
    }

    const sumbissionSum = sumbissionStatusRes.reduce((a, b) => Number(a) + Number(b), 0)
    setSubmissionLoading(false)

    if(submissionId.data.id.length == sumbissionSum){
      toast({
        variant: "accept",
        title: "Well Done!! Please Look at Sumbissions Tab for More Details",
      })
    }else if(submissionId.data.id.length != sumbissionSum){
      toast({
        variant: "destructive",
        title: `Oops! | Number of Tests Passed ${sumbissionSum}/${submissionId.data.id.length} | Please Look at Sumbissions Tab for More Details`,
      })
    }else{
      toast({
        variant: "destructive",
        title: "Error",
      })
    }
  }

  return (
    <div>
      <div className="rounded-xl">
        <div className="my-2">
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

function Submissions({userId, problemId} : {userId: string, problemId: string}) {
  return <SubmissionTable userId={userId} problemId={problemId}/>;
}

export default function CodeEditor({dCode, slug} : {dCode: CodeEditorProps, slug: string}) {

  const [activeTab, setActiveTab] = useState("Submit");

  return (
    <div>
      <div>
      <div className="px-2 text-lg font-bold text-violet-600 bg-black ">Code&lt;&gt;</div>
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
          <Submit defaultCode={dCode} slug = {slug}/>
        </div>
        <div>
          {activeTab == "Submissions" && <Submissions userId={TEST_USER_ID} problemId={dCode[0].problemId}/>}
        </div>
      </div>
      </div>
    </div>
  );
}



