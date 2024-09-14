"use client"

import { useState, useEffect } from "react";
import { useToast } from "@ui/components/ui/use-toast";
import axios from "axios";
import Editor from "@monaco-editor/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@ui/components/ui/select";
import { Button } from "@repo/ui/components/ui/button";
import { Loader2 } from "lucide-react";


export type defaultCode = {
    id: string;
    languageId: number;
    problemId: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
};

export const EditorComponent = ({
    defaultCode,
    slug,
    setActiveTab,
  }: {
    defaultCode: defaultCode[];
    slug: string;
    setActiveTab: any;
  }) => {
    const [code, setCode] = useState("");
    const [runCode, setRunCode] = useState("");
    const [editorLanguage, setEditorLanguage] = useState("cpp");
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();
    const [submissionLoading, setSubmissionLoading] = useState(false);
    const [runningLoading, setRunningLoading] = useState(false);
  
    useEffect(() => {
      const getFunctionCode = async () => {
        setCode(defaultCode?.[0]?.code || "Refresh");
        setLoading(false);
      };
      getFunctionCode();
    }, []);
  
    if (loading) {
      return <div>Loading..</div>;
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
        const submissionId = await axios.post(`/api/v1/problem`, {
          code: code,
          languageId: editorLanguage,
          problemId: defaultCode?.[0]?.problemId,
          slug: slug,
        });
  
        console.log(submissionId.data.id);
  
        const params = {
          submissionID: submissionId.data.id,
        };
  
        const submissionStatus = await axios.get(`/api/v1/submission`, {
          params,
        });
  
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
  
        const wait = await new Promise((resolve) => {
          setTimeout(resolve, 800);
        });
  
        // Change to Submission Tab
        setActiveTab("Submissions");
      } catch (error : any) {
        setSubmissionLoading(false);
        console.log(error);
        if (error.response && error.response.status == 429) {
          toast({
            variant: "destructive",
            title: "Too Many Requests. Please Try Again Later in Few Mintues",
          });
        } else {
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
          <div className="my-2">
            <p className="text-base font-bold">Language</p>
            <Select
              value={editorLanguage}
              defaultValue="cpp"
              onValueChange={(value) => {
                setEditorLanguage(value);
                if (value == "javascript") {
                  setCode(defaultCode?.[1]?.code || "Error");
                } else {
                  setCode(defaultCode?.[0]?.code || "Error");
                }
              }}
            >
              <SelectTrigger className="min-w-max bg-gray-900 text-white">
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
                fontSize: 12,
                scrollBeyondLastLine: false,
                minimap: { enabled: false },
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
              {submissionLoading ? (
                <Button className="bg-violet-700" onClick={onSubmit} disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </Button>
              ) : (
                <Button className="bg-violet-700" onClick={onSubmit}>
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default EditorComponent;