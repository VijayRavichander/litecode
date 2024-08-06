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
        const submission = await prisma.submission.findFirst({
          where: {
            judge0Token: submissionTokens[tokens].token,
          },
        });

        sumbissionIDs.push({status: submissionTokens[tokens].status, id: submission.id})
    }

    for (const sub of sumbissionIDs) {

      // Processing
      if (sub.status.id == 1 || sub.status.id == 2) {
        await prisma.submission.update({
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
        await prisma.submission.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'ACCEPTED',
          },
        });
      }

      // Wrong Answer
      else if(sub.status.id == 4){
        await prisma.submission.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'REJECTED',
          },
        });
      }

      // TLE
        else if(sub.status.id == 5){
          await prisma.submission.update({
            where: {
              id: sub.id,
            },
            data: {
              status: 'TLE',
            },
          });
        }

      // Compilation Error
      else if(sub.status.id == 6){
        await prisma.submission.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'COMPILATIONERROR',
          },
        });
      }

      else if(sub.status.id > 6 && sub.status.id < 13){
        await prisma.submission.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'RUNTIMEERROR',
          },
        });
      }

      else{
        await prisma.submission.update({
          where: {
            id: sub.id,
          },
          data: {
            status: 'INTERNALERROR',
          },
        });
      }
    }

    return c.json({
      message: "Submission Updated"
    }, 200);

  } catch (error) {
    console.error('Error updating submission status:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default app
