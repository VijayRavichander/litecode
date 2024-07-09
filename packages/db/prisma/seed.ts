import prisma  from "../src";
import fs from "fs";


// Helper Function
function promisifedReadFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }


(async () => {
    try {
        // Add test user
        await prisma.user.create({
            data: {
                email: "testuser1@gmail.com", 
                password: "test"
            }
        })

        // Add Problem Statement
        const MOUNT_PATH = "../../apps/problems";
        const problemStatement = await promisifedReadFile(
            `${MOUNT_PATH}/two-sum/problem.md`
          );
        
        const pId = await prisma.problem.create({
            data: {
                title: "Add Sum", 
                description: problemStatement, 
                slug: "two-sum"
            }
        })
        // Add Default Code for all Languages


        const language_ext = ["cpp" , "js"]
        const language_id = [54, 93]
        

        for(let idx = 0; idx < language_ext.length; idx++){

            var problemDefaultCode = await promisifedReadFile(
                `${MOUNT_PATH}/two-sum/FunctionCode/functionCode.${language_ext[idx]}`
            )

            const res = await prisma.defaultCode.create({
                data: {
                    problemId: pId.id, 
                    languageId: language_id[idx], 
                    code: problemDefaultCode
                }, 
    
            })

        }
        console.log("Data seeded successfully");
        
    }catch(e){
        console.log("Error while seeding data")
        console.log(e)
    }
})();