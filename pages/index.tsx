import Head from 'next/head'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { motion } from "framer-motion"

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="m-0 px-6 py-24 dark:text-slate-300 align-center">
        <h3 className="leading-tight text-5xl text-center">
          {t('greeting')}
        </h3>

        <p className="m-16 leading-7 text-center text-xl whitespace-pre-line">
          {t('introduction')}
        </p>

        <div className="max-w-5xl flex flex-wrap items-center justify-center">
          <Link
            href="/work"
            className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-indigo-400"
          >
            <h2 className="mb-4 text-2xl">{t('label_work')}</h2>
            <p className="mb-5 text-lg">{t('intro_work')}</p>
          </Link>

          <Link
            href="/projects"
            className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-indigo-400"
          >
            <h2 className="mb-4 text-2xl">{t('label_projects')}</h2>
            <p className="mb-5 text-lg">{t('intro_projects')}</p>
          </Link>

          <Link
            href="https://www.canvasconfetti.com"
            className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-indigo-400"
          >
            <h2 className="mb-4 text-2xl">{t('label_paintings')}</h2>
            <p className="mb-5 text-lg">{t('intro_paintings')}</p>
          </Link>

          <Link
            href="/about"
            className="max-w-md m-4 p-6 text-left inherit no-underline border border-gray-200 rounded-xl hover:text-indigo-400"
          >
            <h2 className="mb-4 text-2xl">{t('label_about')}</h2>
            {/* &rarr; -> */}
            <p className="mb-5 text-lg">{t('intro_about')}</p>
          </Link>
        </div>
       </div>
    </motion.div>
  )
}
