import styles from "@/styles/createGame.module.css";

export default function createPage() {

    return (
        <main id={styles.main} className='flex min-h-screen flex-col'>

            <form className={styles.createContainer}>

                <div id={styles.accontForm}>
                    <h1>Create the game here !!</h1><br/>
                    <input className={styles.input} type="text" placeholder="Name"/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Release Date" />
                    <br/>
                    <input className={styles.input} type="text" placeholder="Description" />
                    <br/>
                    <input className={styles.input} type="text" placeholder="Developer" />
                    <br/>
                    <input className={styles.input} type="text" placeholder="Distributor" />
                    <br/>
                    <input className={styles.input} type="text" placeholder="Price" />
                    <br/>
                    <p> Image Game: <input className={styles.input} type="file" placeholder="Image Game" /></p>
                    <br/>
                    <p> Link Plataform: <input className={styles.input} type="file" placeholder="Link Platform" /></p>

                    <br/>
                    <input id={styles.submitBtn} type='submit' value='Create'/>
                </div>

            </form>

        </main>
    );

}