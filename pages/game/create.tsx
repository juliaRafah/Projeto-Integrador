import styles from "@/styles/createGame.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { checkToken } from "@/services/tokenConfig";

export default function createPage() {
    const router = useRouter();

    const [formData , setFormData] = useState (
        {
            name: '',
            releaseDate: '',
            gender: '',
            link: '',
            description: '',
            developer: '',
            distributor: '',
            price: '',
            imageURL: ''
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
            const response = await fetch(`/api/action/game/create` , {
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

            <form className={styles.createContainer} onSubmit={formSubmit}>

                <div id={styles.accontForm}>
                    <h1>Create the game here !!</h1>
                    <img src="/mario_PNG113.png" alt='' className={styles.iconCreate}></img>
                    <input className={styles.input} type="text" placeholder="Name" onChange={(event) => {handleFormEdit(event , 'name')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Release Date" onChange={(event) => {handleFormEdit(event , 'releaseDate')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="gender" onChange={(event) => {handleFormEdit(event , 'gender')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Description" onChange={(event) => {handleFormEdit(event , 'description')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Developer" onChange={(event) => {handleFormEdit(event , 'developer')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Distributor" onChange={(event) => {handleFormEdit(event , 'distributor')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Price" onChange={(event) => {handleFormEdit(event , 'price')}}/>
                    <br/>
                    <input className={styles.input} type="text" placeholder="Link" onChange={(event) => {handleFormEdit(event , 'link')}}/>
                    <br/>
                    <p> Image Game: <input className={styles.input} type="file" placeholder="Image Game" onChange={(event) => {handleFormEdit(event , 'imageURL')}}/></p>

                    <br/>
                    <input id={styles.submitBtn} type='submit' value='Create'/>
                </div>

            </form>

        </main>
    );

}
