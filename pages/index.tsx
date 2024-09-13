import styles from "@/styles/home.module.css";
import { getCookie } from 'cookies-next';
import { checkToken } from '@/services/tokenConfig';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();

  const [name , setName] = useState('');

  function gameClick(gameName: string) {
    router.push(`/game/` + gameName);
  }

  function handleNameEdit(event:any) {
    setName(event.target.value);
  }


  return (
    <main id={styles.main} className={`flex min-h-screen flex-col`}>
      <nav className={styles.navBar}>
        <input className={styles.searchBar} type="text" onChange={handleNameEdit}/>

        <div>
          <Link href={`/game/create`}> Criar Filme </Link>
          <button className={styles.logoutBtn}> Logout </button>
        </div>
        <img src="/iconGame.png" alt="" className={styles.gameIcon}></img>
      </nav>


      <div  onClick={() => { gameClick(name) }} className={styles.containerGames}>
        <img src="/iconCar.jfif" alt="" className={styles.cardImg}/>
        <div className={styles.cardInfos}>
          <h1>{name}</h1>
          <br/>
          <p>data de lançamento</p>
          <p>descrição</p>
        </div>
      </div>


    </main>
  );
}
