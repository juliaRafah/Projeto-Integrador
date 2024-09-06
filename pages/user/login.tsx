import styles from "@/styles/login.module.css"
import Link from "next/link";

export default function registerPage() {


    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>


            <form className={styles.container}>
                <h1>Login Here !</h1>
                <br/><br/>
                <div className={styles.accountForm}>
                    <input className={styles.input} type="text" placeholder="Email"/>
                    <br/><br/>
                    <input className={styles.input} type="text" placeholder="Password"/>
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
