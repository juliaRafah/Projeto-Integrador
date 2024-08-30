import { Head } from "next/document";


export default function registerPage (){
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        
        <Head>
            <title> Cadastro </title>
        </Head>

            <div>
                <input type="text" placeholder="Name" onChange={(event) => {(   'name')}}/>
            </div>
        </main>
    );
}