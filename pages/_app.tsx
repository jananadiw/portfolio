import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { motion, AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <AnimatePresence mode='wait'>
       <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
