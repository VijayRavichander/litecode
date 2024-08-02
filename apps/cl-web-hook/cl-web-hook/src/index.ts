import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string, 
    JWT_SECRET: string
  }
}>()

app.get('/', (c) => {
  return c.json({ message: 'Healthy' }, 200);
});

app.put('/judge0', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL, 
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const submissionTokens = [body];
    const sumbissionIDs = []

    for(let tokens = 0; tokens < submissionTokens.length; tokens++){
        const submission = await prisma.submissions.findFirst({
          where: {
            judge0Token: submissionTokens[tokens].token,
          },
        });

        sumbissionIDs.push({status: submissionTokens[tokens].status, id: submission.id})
    }

    for (const sub of sumbissionIDs) {

      // Processing
      if (sub.status.id == 2) {
        await prisma.submissions.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'PENDING',
          },
        });
      }

      // Right Answer
      else if (sub.status.id == 3) {
        await prisma.submissions.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'ACCEPTED',
          },
        });
      }

      // Wrong Answer
      else{
        await prisma.submissions.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'REJECTED',
          },
        });

      }
    }

    return c.json({
      message: "All Good"
    }, 200);

  } catch (error) {
    console.error('Error updating submission status:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default app
