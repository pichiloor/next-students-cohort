import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {StudentsList} from "../src/components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awana Cohort</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <div>
          <Image src="/awana.jpeg" alt="Awana Logo" width={80} height={80} />
          <div>
            <h1>Cohort Students ALOOR</h1>
          </div>
        </div>

        {/* Render students */}
        <div>
          <StudentsList/>
        </div>

      </main>
    </div>
  )
}

export default Home
