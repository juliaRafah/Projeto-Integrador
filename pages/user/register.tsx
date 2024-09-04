import styles from "@/styles/register.module.css";


export default function registerPage() {

    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>

            <div className={styles.registerContainer}>

                <div className={styles.minContainer}>
                    <h1>Cadastre-se Aqui !!</h1>
                </div>

                <input type="text" placeholder="Email" />
                <br />
                <input type="text" placeholder="Document" />
                <br />
                <input type="text" placeholder="Name" />
                <br />
                <input type="text" placeholder="Username" />
                <br />
                <input type="text" placeholder="Password" />
                <br /><br />

                <input id={styles.submitBtn} type='submit' value='Register' />
            </div>

        </main>
    );
}