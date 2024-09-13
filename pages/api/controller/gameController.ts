import { createGameModel , findGameModelByName } from "../model/game";


export async function createGame (_name:"" , _releaseDate:string , _gender:string , _link:string , _imageURL:string , _description:string , _developer:string , _distributor:string , _price:string) {
    try {
        const gameByName = await findGameModelByName(_name);
        if (gameByName != undefined) {
            return {status: 403 , message: 'Name already regisered'};
        }

        const response = await createGameModel (_name , _releaseDate , _gender , _link , _imageURL , _description , _developer , _distributor , _price);
        return {status: 201 , message: 'Game registered' , data: response};
    }
    
    catch(err) {
        return {status: 500 , message: 'Something went wrong'};
    }
}