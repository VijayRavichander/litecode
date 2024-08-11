import { Card, CardContent, CardDescription, CardTitle } from "@repo/ui/components/ui/card"
import { db } from "../db"
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
export default async function Page () {

const contest = await db.contest.findMany({
    where: {
    }
})

return(<div className="mx-10">
    <div className="text-2xl my-5">On Going Contest</div>
    <div className="flex  my-5">
        {
            contest.map((item, index)=> (
                <ContestCard key={index} item = {item} />
            ))
        }
    </div>
    <div className="text-2xl my-5">Upcoming Contest</div>

</div>
)
}

const ContestCard = ({item} : {item: any}) => {

    console.log(item.startsAt)
    const startTime = new Date(item.startsAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true })
    const endTime = new Date(item.endsAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true })
    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true })


    return <div className="text-white">
        <Card className="p-5 bg-black border-0 rounded-sm">
            <CardTitle className="text-white">{item.name}</CardTitle>
            <CardDescription className="text-white">Starts At: {startTime} PDT</CardDescription>
            <div>
                <Button variant = "secondary" disabled = {currentTime > endTime} className="my-4">
                    <Link href={`contest/${item.id}`} >
                        Compete
                    </Link>
                </Button>
            </div>
        </Card>
    </div>
}