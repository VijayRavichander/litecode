import ProblemTable from "../../components/ProblemTable";

export default async function Page() {

  return (
    <div className="mx-5 my-2 text-white bg-black rounded-xl p-4">
      <div className="text-xl my-2">
        PROBLEMS
      </div>
      <ProblemTable/>
    </div>
  );
}
