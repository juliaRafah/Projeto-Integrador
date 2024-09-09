import styles from "@/styles/register.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { checkToken } from "@/services/tokenConfig";


export default function registerPage() {
    const router = useRouter();
   
    const [formData , setFormData] = useState (
        {
            email : '',
            document : '',
            name : '',
            username : '',
            password : ''
        }
    );

    function handleFormEdit (event:any , field:string) {
        setFormData({
            ...formData,
            [field] : event.target.value
        });
    }

    async function formSubmit (event:any) {
        event.preventDefault();

        console.log(formData);

        try {
            const response = await fetch(`/api/action/user/create` , {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(formData)
            });

            const responseJson = await response.json();

            alert(`${responseJson.message}`);

            if (response.status == 201) {
                router.push(`/user/login`)
            }
        }

        catch(err) {
            console.log(err);
        }
    }


    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>
                      
            <form className={styles.registerContainer} onSubmit={formSubmit}>
        
                <div id={styles.accountForm}>
                    <h1>Register Here !!</h1>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Email" onChange={(event) => {handleFormEdit(event , 'email')}}/>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Document" onChange={(event) => {handleFormEdit(event , 'document')}}/>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Name" onChange={(event) => {handleFormEdit(event , 'name')}}/>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Username" onChange={(event) => {handleFormEdit(event , 'username')}}/>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Password" onChange={(event) => {handleFormEdit(event , 'password')}}/>
                    <br/><br/>

                    <input id={styles.submitBtn} type='submit' value='Register'/>
                    <Link className={styles.link} href={`/user/login`}>Login</Link>
                </div>

            </form>

        </main>
    );

}


export function getServerSideProps ({req , res}: any) {
    try {
        const token = getCookie('authorization' , {req , res});

        if (!token) {
            throw new Error ('Invalid Token');
        }

        checkToken(token);

        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }
    }

    catch(err) {
        return {
            props: {}
        }
    }
}