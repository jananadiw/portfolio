import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-6 dark:text-slate-300">
      <Head>
        <title>Jananadi W</title>
        <meta name="description" content="Jananadi" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻</text></svg>"></link>
      </Head>

      <main className="py-16 flex flex-1 flex-col items-center align-center">
        <h3 className="m-0 leading-tight text-5xl text-center">
          Hello! 👋🏼 
        </h3>
        
        <p className="m-16 leading-6 text-center text-xl">
          I'm Jananadi, a Full-Stack Developer <br />
          based in Seoul, South Korea. 
        </p>

        <div className="max-w-5xl flex flex-wrap items-center justify-center">
          <Link href="/work" className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-blue-600 hover:border-blue-600">
            <h2 className="mb-4 text-2xl">Work 💼 </h2>
            <p className="mb-5 text-lg">Check out some work projects that I was a part of over last few years. They taught me a lot. </p>
          </Link>

          <Link href="/projects" className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-blue-600 hover:border-blue-600">
            <h2 className="mb-4 text-2xl">Projects | Writing 👩🏻‍💻</h2>
            <p className="mb-5 text-lg">Here are few projects I did and currently working on, and some articles.</p>
          </Link>
  
          <Link href="https://www.canvasconfetti.com" className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-blue-600 hover:border-blue-600">
            <h2 className="mb-4 text-2xl">Paintings 🙈</h2>
            <p className="mb-5 text-lg">Beside coding, I love to paint. Still an amateur, checkout some of my art.</p>
          </Link>

          <Link href="/about" className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-blue-600 hover:border-blue-600">
            <h2 className="mb-4 text-2xl">About 👩🏻‍💼</h2>
            {/* &rarr; -> */}
            <p className="mb-5 text-lg">
              Let me introduce myself. Find my contact details here as well. Thanks for visiting!
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
