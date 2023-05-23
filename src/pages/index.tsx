import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>Majid Savalanpour - web site </div>
        <div>Performance Testing with 1 MB images</div>
        <div style={{display: "flex"}}>
          <img src="images/1MB.jpg" width="500"/>
        </div>
        <div>Coming soon ...</div>
      </main>
    </>
  )
}
