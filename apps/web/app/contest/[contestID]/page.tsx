import ContestProblemTable from "../../../components/ContestProblemTable";
import { db } from "../../db";
export default async function Page({
  params: { contestID },
}: {
  params: {
    contestID: string;
  };
}) {  

  const contest = await db.contest.findFirst({
    where: {
      id: contestID
    }
  })

  console.log(contest)

  return (
    <div className="px-10">
      <div className="flex justify-between items-center">
        <div className="text-2xl my-8">
          {contest?.name}
        </div>
        <div>
          Ends at: {DateFormat(contest?.endsAt)} PDT
        </div>
      </div>
  
      <ContestProblemTable contestID={contestID} />
    </div>
  );
}

const DateFormat = (date: any) => {
  const options = {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
};
  const formattedDate = new Date(date).toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' })
  return formattedDate;
}

