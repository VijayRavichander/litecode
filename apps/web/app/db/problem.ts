import {db} from "."

export const getProblems = async () => {
    const problems = await db.problem.findMany({
      include: {
        defaultCode: true,
        submissions: true
      },
    });
    return problems;
};

export const getProblem = async ({problemID} : {problemID : string}) => {
    const {description, defaultCode, slug} = await db.problem.findUnique({
        where: {
            id: problemID 
        }, select: {
            description : true, 
            defaultCode: true, 
            slug: true, 
        }
    });
    return {description, defaultCode, slug};
}

export const getUser = async () => {
    const user = await db.user.findFirst({
        where: {

        },
        select: {
            id: true
        }
    });

    return user?.id;
}