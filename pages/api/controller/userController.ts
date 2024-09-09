import { createUserModel , findUserModelByemail , findUserModelBydocument , findUserModelByusername , findUserModelLogin} from "../model/user";
import { generateToken } from '@/services/tokenConfig';

export async function createUser (_email:string , _document:string , _username:string , _password:string , _name="") {
    try {
        const userByEmail = await findUserModelByemail(_email);
        if (userByEmail != undefined) {
            return {status: 403 , message: 'Email already regisered'};
        }

        const userByDocument = await findUserModelBydocument(_document);
        if (userByDocument != undefined) {
            return {status: 403 , message: 'Document already regisered'};
        }

        const userByUsername = await findUserModelByusername(_username);
        if ( userByUsername != undefined ) {
            return {status: 403 , message: 'Username already registered'};
        }

        const response = await createUserModel (_email , _document , _name , _username , _password);
        return {status: 201 , message: 'User registered' , data: response};
    }

    catch(err) {
        return {status: 500 , message: 'Something went wrong'};
    }

}
export async function login (_email : string , _password : string) {
    try {

        const userLogin = await findUserModelLogin (_email , _password);

        if (userLogin == undefined) {
            return {status: 404 , message: 'Incorrect username or password'};
        }
        else {
            const _token = generateToken(_email);

            return {status: 200 , message: 'Logged in' , token: _token};
        }

    }
    catch(err) {
        return {status: 500 , message: 'Something went wrong'};
    }
}

