import { Card, CardContent, CardDescription, CardTitle } from "@repo/ui/components/ui/card"
import { db } from "../db"
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
export default async function Page () {

const contest = await db.contest.findMany({
    where: {

    }
})

return <div className="flex mx-10 my-5">
    {
        contest.map((item, index)=> (
            <ContestCard key={index} item = {item} />
        ))
    }
</div>
}

const ContestCard = ({item} : {item: any}) => {

    console.log(item.startsAt)
    const startTime = new Date(item.startsAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true })
    const endTime = new Date(item.endsAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true })
    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', hour12: true })


    return <div>
        <Card className="p-5">
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>Start At: {startTime} PDT</CardDescription>
            <div>
                <Button disabled = {currentTime < endTime}>
                    <Link href={`contest/${item.id}`} >
                        Compete
                    </Link>
                </Button>
            </div>
        </Card>
    </div>
}