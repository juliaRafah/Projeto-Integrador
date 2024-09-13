import { NextApiRequest ,  NextApiResponse } from "next";
import { createGame } from "../../controller/gameController";

export default async ( req:NextApiRequest , res:NextApiResponse ) => {
    if ( req.method != 'POST' ){
        return res.status(403).json( {message: 'Method not allowed'} );
    }

    const { name , releaseDate , gender , link , imageURL , description , developer , distributor , price } = req.body;

    const response:any = await createGame ( name , releaseDate , gender , link , imageURL , description , developer , distributor , price );

    return res.status(response.status).json({message: response.message});
}