import Link from 'next/link';
import styles from '../styles/home.module.scss'
import Head from 'next/head'

export default function Header() {
    return (
        <Head>
        <title>Jananadi W</title>
        <meta name="description" content="Jananadi" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩🏻</text></svg>"></link>
      </Head>
    )
}