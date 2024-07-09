import fs from "fs"
import { resolve } from "path"

const MOUNT_PATH = "/Users/vijayravichander/Code/litecode/litecode/apps/problems"


export async function getInputs({slug} : {slug: string}){
    return new Promise((resolve, reject) => {
        fs.readdir(
            `${MOUNT_PATH}/${slug}/testcase/inputs`, async (err, files) => {
                if(err){
                    console.log(err)
                }else{
                    await Promise.all(
                        files.map((file) => {
                            return new Promise((resolve, reject) => {
                                fs.readFile(
                                    `${MOUNT_PATH}/${slug}/testcase/inputs/${file}`, { encoding: "utf-8" }, 
                                    (err, data) => {
                                        if(err){
                                            reject(err);
                                        }
                                        resolve(data);
                                    }
                                )
                            })
                        })
                    ).then((data) => {
                        resolve(data);
                    }).catch((e) => reject(e))

                }
            }
        )
    })
}

export async function getOutputs({slug} : {slug: string}){
    return new Promise((resolve, reject) => {
        fs.readdir(
            `${MOUNT_PATH}/${slug}/testcase/outputs`, async (err, files) => {
                if(err){
                    console.log(err)
                }else{
                    await Promise.all(
                        files.map((file) => {
                            return new Promise((resolve, reject) => {
                                fs.readFile(
                                    `${MOUNT_PATH}/${slug}/testcase/outputs/${file}`, { encoding: "utf-8" }, 
                                    (err, data) => {
                                        if(err){
                                            reject(err);
                                        }
                                        resolve(data);
                                    }
                                )
                            })
                        })
                    ).then((data) => {
                        resolve(data)
                    }).catch((e) => {reject(e)})
                }
            }
        )
    })
}

export async function getFullCode({languageExt, slug} : {problemId: string, languageExt: string, slug: string}) : Promise<string>{
    return new Promise((resolve, reject) => {
        fs.readFile(
            `${MOUNT_PATH}/${slug}/BaseCode/baseCode.${languageExt}`, { encoding: "utf-8" },
            (err, file) => {
                if(err){
                    reject(err)
                }else{
                    resolve(file)
                }
            }
        )
    })
}





