import { NextApiRequest ,  NextApiResponse } from "next";
import { createUser } from "../../controller/userController";

export default async ( req: NextApiRequest , res: NextApiResponse ) => {
    if ( req.method != 'POST' ){
        return res.status(403).json( {message: 'Method not allowed'} );
    }

    const { email , document , name , username , password } = req.body;

  
    const response:any = await createUser (email , document , name , username , password);

    return res.status(response.status).json({message: response.message});
}