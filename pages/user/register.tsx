import styles from "@/styles/register.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCookie } from "cookies-next";


export default function registerPage() {


    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>
                      
            <form className={styles.registerContainer}>
        
                <div id={styles.accountForm}>
                    <h1>Register Here !!</h1>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Email" />
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Document" />
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Username" />
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Password" />
                    <br/><br/>

                    <input id={styles.submitBtn} type='submit' value='Register'/>
                    <Link className={styles.link} href={`/user/login`}>Login</Link>
                </div>

            </form>

        </main>
    );

}