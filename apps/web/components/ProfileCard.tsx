import { getSubmissions } from "../app/db/submission";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";

export const ProfileCard = async ({ profileID }: { profileID: string }) => {
  const submissions = await getSubmissions(profileID);
  console.log(submissions);

  return (
    <div>
      <div className="">
        <div className="flex">
          <div className="rounded-xl m-4 p-2 flex my-5 justify-between items-center bg-black text-gray-400">
            <div>
              <div>
                <span className="text-lg text-gray-400">Profile Details</span>
              </div>
              <Avatar className="rounded h-32 w-32">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="mx-5 text-lg font-semibold ">
              <div>UserName: test123</div>
              <div>Email-ID: test@gmail.com</div>
              <div>Joined On: 1st Aug 2024</div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 rounded m-4 p-2 bg-black text-gray-400">
            <div className="text-lg text-gray-400">Recent Submissions</div>
            <div>
              {submissions &&
                submissions.map((submission: any) => (
                  <SubmisionRow key={submission.id} submission={submission} />
                ))}
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

const ConvertToLocaleTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

const SubmisionRow = ({ submission }: { submission: any }) => {
  return (
    <div className="my-1 border-b border-gray-900 rounded">
      <div className="m-3">
        <div>{submission.problem.slug}</div>
        <div className="flex justify-between text-sm">
          <div
            className={`${submission.status == "ACCEPTED" ? "text-green-400" : "text-red-400"}`}
          >
            {submission.status}
          </div>
          <div>{ConvertToLocaleTime(submission.createdAt).substr(0, 9)}</div>
        </div>
      </div>
    </div>
  );
};
