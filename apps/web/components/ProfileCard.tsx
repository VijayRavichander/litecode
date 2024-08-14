import { db } from "../app/db";
import { getSubmissions } from "../app/db/submission";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";

enum SubmissionResult {
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  PENDING = "PENDING",
  TLE = "TLE", // Time Limit Exceeded
  COMPILATIONERROR = "COMPILATIONERROR",
  RUNTIMEERROR = "RUNTIMEERROR",
  INTERNALERROR = "INTERNALERROR",
}

interface SubmissionStatusDecoratorProps {
  status: SubmissionResult;
}


export const ProfileCard = async ({ profileID }: { profileID: string }) => {
  const submissions = await getSubmissions({profileID});
  const userDetails = await db.user.findFirst({
    where: {
      id: profileID
    }, select: {
      email: true, 
      // name and createdAt needs to be added in schema and here
    }
  })

  return (
    <div>
      <div className="">
        <div className="flex">
          <div className="min-h-screen rounded-xl m-4 p-2 w-1/3 my-5 bg-black text-gray-400">
            <div>
              <div className="my-8">
                <span className="text-xl text-violet-500">Profile Details</span>
              </div>
              <Avatar className="rounded h-48 w-48">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>{userDetails?.email}</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-xl font-semibold ">
              <div className="my-8">UserName: test123</div>
              <div className="my-8">Email-ID: {userDetails?.email}</div>
              <div className="my-8">Joined On: 1st Aug 2024</div>
            </div>
            <div>
              Badges Coming Soon...
            </div>
          </div>
          <div className="w-full m-4 p-2">
          <div className="w-full rounded  bg-black text-gray-400">
            <div className="text-xl text-violet-500">Recent Submissions</div>
            <div>
              {submissions &&
                submissions.map((submission: any) => (
                  <SubmisionRow key={submission.id} submission={submission} />
                ))}
            </div>
          </div>
          <div className="flex justify-between my-8 text-gray-400">
            Submissions Heat-Map Coming Soon...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ConvertToLocaleTime (dateString: string){
  const date = new Date(dateString);
  return date.toLocaleString();
};

const SubmisionRow = ({ submission }: { submission: any }) => {
  return (
    <div className="my-1 border-b border-gray-900 rounded">
      <div className="m-3 font-semibold">
        <div>{submission.problem.slug}</div>
        <div className="flex justify-between text-sm">
            {SubmissionStatusDecorator(submission.status)}
          <div>{ConvertToLocaleTime(submission.createdAt).substr(0, 9)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

export const SubmissionStatusDecorator = (status : SubmissionResult) => {
  let bgColor = '';
  let textColor = '';
  let text = '';

  switch (status) {
    case SubmissionResult.ACCEPTED:
      bgColor = 'bg-green-100';
      textColor = 'text-green-300';
      text = 'Accepted';
      break;
    case SubmissionResult.REJECTED:
      bgColor = 'bg-red-100';
      textColor = 'text-red-500';
      text = 'Rejected';
      break;
    case SubmissionResult.PENDING:
      bgColor = 'bg-yellow-100';
      textColor = 'text-blue-300';
      text = 'Pending';
      break;
    case SubmissionResult.TLE:
      bgColor = 'bg-orange-100';
      textColor = 'text-yellow-300';
      text = 'Time Limit Exceeded';
      break;
    case SubmissionResult.COMPILATIONERROR:
      bgColor = 'bg-purple-100';
      textColor = 'text-rose-300';
      text = 'Compilation Error';
      break;
    case SubmissionResult.RUNTIMEERROR:
      bgColor = 'bg-indigo-100';
      textColor = 'text-indigo-300';
      text = 'Runtime Error';
      break;
    case SubmissionResult.INTERNALERROR:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-300';
      text = 'Internal Error';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-300';
      text = 'Unknown Status';
  }

  return (
    <div className={`text-sm font-light ${textColor}`}>
      {text}
    </div>
  );
}