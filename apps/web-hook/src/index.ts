import express, { Request, Response } from 'express';
import { db } from './db';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Healthy' });
});

app.put('/judge0', async (req: Request, res: Response) => {
    try {
        const body = req.body;

        const submissionTokens:{ token: string, status: { id: number } }[] = [body]

        const firstToken = submissionTokens[0].token;

        const submission = await db.submissions.findFirst({
            where: {
                //@ts-ignore
                judge0Token: firstToken
            }
        });


        for (const sub of submissionTokens) {
            if (sub.status.id !== 3) {
                await db.submissions.update({
                    where: {
                        //@ts-ignore
                        id: submission.id
                    },
                    data: {
                        status: 'REJECTED'
                    },
                });

                return res.status(200).json({});
            }
        }

        await db.submissions.update({
            where: {
                //@ts-ignore
                id: submission.id
            },
            //@ts-ignore
            data: {
                status: 'ACCEPTED'
            }
        });

        return res.status(200).json({});


    } catch (error) {
        console.error('Error updating submission status:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3005, () => {
    console.log('App started on port: 3005');
});
