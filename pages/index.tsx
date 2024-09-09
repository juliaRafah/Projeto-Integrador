import styles from "@/styles/home.module.css";
import { getCookie } from 'cookies-next';
import { checkToken } from '@/services/tokenConfig';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();


  return (
    <main className={`flex min-h-screen flex-col`}>

      <div>
        <Link href={``}> Criar Filme </Link>
        <button className={styles.logoutBtn}> Logout </button>
      </div>


    </main>
  );
}
