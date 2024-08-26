import { prisma } from "@/db";

export async function createUserModel (_email:string , _document:string , _name:string , _username:string , _password:string) {
    
    const user = await prisma.user.create({
        data: {
            email : _email,
            document : _document,
            name : _name,
            username : _username,
            password : _password
        }
    });

    return user;
}
 
export async function findUserModelByemail (_email : string) {

    const user = await prisma.user.findUnique({
        where: {
            email : _email
        }  
    });

    return user;
}

export async function findUserModelBydocument (_document : string) {

    const user = await prisma.user.findUnique({
        where: {
            document : _document
        }
    });

    return user;
}

export async function findUserModelByusername (_username : string) {

    const user = await prisma.user.findUnique({
        where: {
            username : _username
        }
    });

    return user;
}

