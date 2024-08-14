import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { timeout } from 'hono/timeout'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string, 
    JWT_SECRET: string
  }
}>()

// Utility function to create a delay
app.use('/', timeout(5000))

app.get('/', (c) => {
  return c.json({ message: 'Healthy' }, 200);
});

app.put('/judge0', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL, 
    }).$extends(withAccelerate())

    const body = await c.req.json();


    const submissions = [body];

    const testCases = []

    for(let submission = 0; submission < submissions.length; submission++){
        const testCase = await prisma.testCase.findFirst({
          where: {
            judge0Token: submissions[submission].token,
          },
        });

        console.log(testCase.id);

        testCases.push({status: submissions[submission].status, id: testCase.id, time: submissions[submission].time, memory: String(submissions[submission].memory)})
    }

    console.log(testCases)
    
    for (const test of testCases) {

      // Processing
      if (test.status.id == 1 || test.status.id == 2) {
        await prisma.testCase.update({
          where: {
            id: test.id,
          },
          data: {
            status: 'PENDING',
          },
        });
      }

      // Right Answer
      else if (test.status.id == 3) {

        await prisma.testCase.update({
          where: {
            id: test.id,
          },
          data: {
            status: 'ACCEPTED',
            time: test.time, 
            memory: test.memory
          },
        });
      }

      // Wrong Answer
      else if(test.status.id == 4){

        await prisma.testCase.update({
          where: {
            id: test.id,
          },
          data: {
            status: 'REJECTED',
            time: test.time, 
            memory: test.memory
          },
        });
      }

      // TLE
        else if(test.status.id == 5){
          console.log("TLE")
          await prisma.testCase.update({
            where: {
              id: test.id,
            },
            data: {
              status: 'TLE',
              time: test.time, 
              memory: test.memory
            },
          });
        }

      // Compilation Error
      else if(test.status.id == 6){
        await prisma.testCase.update({
          where: {
            id: test.id,
          },
          data: {
            status: 'COMPILATIONERROR',
          },
        });
      }

      else if(test.status.id > 6 && test.status.id < 13){
        await prisma.testCase.update({
          where: {
            id: test.id,
          },
          data: {
            status: 'RUNTIMEERROR',
          },
        });
      }

      else{
        await prisma.testCase.update({
          where: {
            id: test.id,
          },
          data: {
            status: 'INTERNALERROR',
          },
        });
      }
    }

    return c.json({
      message: "Submission Received"
    }, 200);

  } catch (error) {
    console.error('Error updating submission status:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default app
