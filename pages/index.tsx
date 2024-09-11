import styles from "@/styles/home.module.css";
import { getCookie } from 'cookies-next';
import { checkToken } from '@/services/tokenConfig';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();


  return (
    <main id={styles.main} className={`flex min-h-screen flex-col`}>
      <nav className={styles.navBar}>
        <input className={styles.searchBar} type="text" />

        <div>
          <Link href={``}> Criar Filme </Link>
          <button className={styles.logoutBtn}> Logout </button>
        </div>
        <img src="/iconGame.png" alt="" className={styles.gameIcon}></img>
      </nav>


      <div className={styles.containerGames}>
        <img src="/iconCar.jfif" alt="" className={styles.cardImg}/>
        <div className={styles.cardInfos}>
          <h1>Nome Jogo</h1>
          <br/>
          <p>Data Lançamento</p>
          <p>Descrição</p>
        </div>
      </div>


    </main>
  );
}
