import CodeEditor from "../../../components/CodeEditor";
import DetailedSubmission from "../../../components/DetailedSubmission";
import ProblemStatement from "../../../components/ProblemStatement";


interface PageProps {
  params: {
    submissionID: string
  }
}
export default async function Page({params} : PageProps) {

  const {submissionID} = params
  console.log(submissionID)
  return (
      <div className="flex flex-col min-h-screen">
        <div className="">
          <DetailedSubmission submissionID={submissionID} />
        </div>
      </div>
  );
}
