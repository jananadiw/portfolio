import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Jananadi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Hello! 👋🏼
        </h2>
        
        <p className={styles.description}>
          I'm Jananadi, a Full-Stack Developer <br />
          based in Seoul, South Korea. 
        </p>

        <div className={styles.grid}>
        <Link href="/projects" className={styles.card}>
            <h2>Projects & Articles &rarr;</h2>
            <p>Take a look at few projects I did and currently working on, created and failed. </p>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Work &rarr;</h2>
            <p>Here are the work stuff i contributed to over the years. I had fun! </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Paintings 🙈 &rarr;</h2>
            <p>Beside being a programmer, I love to create art. Still an amateur, but here are some of my art.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>
              Let me properly introduce myself. Find my contact details here as well. Thanks for visiting.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      &copy; Jananadi Wedagedara 2022
      </footer>
    </div>
  )
}
