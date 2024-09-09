import { prisma } from "@/db";

export async function createGameModel(_name:string , gender:string , link:string , imageURL:string , _description:string) {

    const game = await prisma.game.create ({
        data: {
            name: _name,
            
        }
    });

    return game;
}