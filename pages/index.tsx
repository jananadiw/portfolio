import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jananadi W</title>
        <meta name="description" content="Jananadi" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻</text></svg>"></link>
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Hello! 👋🏼 
        </h3>
        
        <p className={styles.description}>
          I'm Jananadi, a Full-Stack Developer <br />
          based in Seoul, South Korea. 
        </p>

        <div className={styles.grid}>
          <Link href="/work" className={styles.card}>
            <h2>Work 💼 </h2>
            <p>Here are some work projects that I was a part of. They taught me a lot. </p>
          </Link>

          <Link href="/projects" className={styles.card}>
            <h2>Projects | Writing 👩🏻‍💻</h2>
            <p>Check out few projects I did and currently working on, and some articles.</p>
          </Link>
  
          <Link href="https://www.canvasconfetti.com" className={styles.card}>
            <h2>Paintings 🙈</h2>
            <p>Beside coding, I love to paint. Still an amateur, checkout some of my art.</p>
          </Link>

          <Link href="/about" className={styles.card}>
            <h2>About 👩🏻‍💼</h2>
            {/* &rarr; -> */}
            <p>
              Let me introduce myself. Find my contact details here as well. Thanks for visiting!
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
