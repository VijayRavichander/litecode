import prisma  from "../src/index";
import fs from "fs";

const MOUNT_PATH = "../../apps/problems";
const language_ext = ["cpp"];
const language_id = [54];

export function promisifedDirectory(path: string): Promise<string[]>{
    return new Promise((resolve, reject) => {
        fs.readdir(path, "utf8", (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

export function promisifedReadFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
}


( async () => {
    try {
        const directories = await promisifedDirectory(MOUNT_PATH);
        for(var dir of directories){
            const problemStatement = await promisifedReadFile(`${MOUNT_PATH}/${dir}/problem.md`)
            const pid = await prisma.problem.upsert({
                //@ts-ignore
                where: {
                    slug: dir
                }, 
                update: {
                    description: problemStatement, 
                    slug: dir
                }, 
                create: {
                    title: dir,
                    description: problemStatement, 
                    slug: dir
                }
            });

            for(const ext of language_ext){
                const problemDefaultCode = await promisifedReadFile(`${MOUNT_PATH}/${dir}/FunctionCode/functionCode.${ext}`)
                const res = await prisma.defaultCode.upsert({
                    //@ts-ignore
                    where: {
                        code: problemDefaultCode
                    }, 
                update: {
                    languageId: language_id[0],
                    code: problemDefaultCode, 
                    problemId: pid.id
                }, 
                create: {
                    problemId: pid.id, 
                    languageId: language_id[0], 
                    code: problemDefaultCode
                }
                });
            }
        }

        console.log("DB has been updated successfully");

    }catch(e){
        console.log("Error while updating the DB")
        console.log(e)
    }
})();





