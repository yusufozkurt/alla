import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cooming soon</title>
        <meta name="description" content="trendz news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://trendznews.top">Trendz News</a>
        </h1>

   
      </main>

     
    </div>
  )
}

export default Home
