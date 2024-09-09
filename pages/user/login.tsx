import styles from "@/styles/login.module.css"
import Link from "next/link";
import { useState } from 'react';
import { setCookie , getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { checkToken } from '@/services/tokenConfig';

export default function registerPage() {
    const router = useRouter();

    const [ formData , setFormData ] = useState (
        {
            email: '',
            password: ''
        }
    );

    function handleFormEdit(event:any , field:string) {
        setFormData ({
            ...formData,
            [field] : event.target.value
        });
    }
    
    async function formSubmit(event:any) {
        event.preventDefault();

        try {
            const response = await fetch (`/api/action/user/login` , {
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify(formData)
            });

            const responseJson = await response.json();

            setCookie('authorization' , responseJson.token);

            if (response.status != 200) {
                alert (`${responseJson.message}`);
            }
            else {
                router.push(`/`);
            }
        }
        catch(err) {
            console.log(err);
        }
    }


    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>


            <form className={styles.container} onSubmit={formSubmit}>
                <h1>Login Here !!</h1>
                <br/><br/>
                <div className={styles.accountForm}>
                    <input className={styles.input} type="email" placeholder="Email" onChange={(event) => {handleFormEdit(event , 'email')}}/>
                    <br/><br/>
                    <input className={styles.input} type="password" placeholder="Password" onChange={(event) => {handleFormEdit(event , 'password')}}/>
                    <br/><br/>

                    <input id={styles.submitBtn} type='submit' value='Sign in'/>
                    <input id={styles.submitbtn} type='submit' value='Forgot Password?'/>
                    <br/><br/>
                    <Link className={styles.link} href={`/user/register`}>Register</Link>
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