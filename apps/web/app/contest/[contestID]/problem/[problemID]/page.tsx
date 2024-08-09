import { db } from "../../../../db"

export default async function Page ({
    params : {
        problemID
    }
  } : {
    params: {
      problemID: string
    }
  }) {

    return <div>
        {problemID}
    </div>
}