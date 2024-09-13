import { prisma } from "@/db";

export async function createGameModel (_name:string , _releaseDate:string , _gender:string , _link:string , _imageURL:string , _description:string , _developer:string , _distributor:string , _price:string) {

    const game = await prisma.game.create ({
        data: {
            name: _name,
            releaseDate: _releaseDate,
            gender: _gender,
            link: _link,
            imageURL: _imageURL,
            description: _description,
            developer: _developer,
            distributor: _distributor,
            price: _price
        }
    });

    return game;
}

export async function findGameModelByName (_name : string) {

    const game = await prisma.game.findUnique({
        where: {
            name : _name
        }
    });

    return game;
}
