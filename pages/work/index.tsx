import Link from 'next/link'
import NavBar from '../../components/navbar'
import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'

export async function getStaticProps() {
  const res = await fetch('https://json-portfolio-data.vercel.app/work')
  const work = await res.json()
  return {
    props: {
      work,
    },
  }
}

// TODO: Type projects
export default function Work({ work }: any) {
  const { t } = useTranslation()
  return (
  <>
  <NavBar />
    <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="py-8 align-center dark:text-slate-300 ">
        <h2 className="m-0 leading-tight text-4xl text-center">
          {t('common:label_work')}
        </h2>
        <div className="mt-14 items-center">
          {work.map((item: any, index: number) => (
            <div
              key={index}
              className="max-w-5xl m-6 p-12 text-left border border-gray-200 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="...">
                  <h2 className="mb-2 text-2xl">{t(`work:${item.project}`)}</h2>
                  <p className="text-lg">{item.type}</p>
                </div>
                <div className="col-span-2 ... text-lg leading-8">
                  <p className="text-lg">{t(`work:${item.description}`)}</p>
                  <p className="font-bold ">{item.stack}</p>
                  <button className="mt-5 py-2.5 px-5 mr-2 mb-2 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <h4>
                      <Link
                        href={`${item.demoUrl}`}
                        passHref={true}
                        target="_blank"
                      >
                        {t('common:visit_url')}
                      </Link>
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  )
}
