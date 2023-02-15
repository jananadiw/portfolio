import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { motion, AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <AnimatePresence mode='wait'>
      <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
