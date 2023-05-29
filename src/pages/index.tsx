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
        <h1>The Impact of Photo Size on Website Performance</h1>
        <br/>
        <h3>An Analysis Using Lighthouse Performance Measurement Tool</h3>
        <br/>
        <div>Performance Testing with <b style={{fontSize: "20px"}}>300 KB</b> images</div>
        <br/>
        <div style={{display: "flex"}}>
          <img src="images/300KB.jpg" width="500"/>
        </div>
      </main>
    </>
  )
}
