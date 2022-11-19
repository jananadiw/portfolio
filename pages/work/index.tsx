import Link from 'next/link'
import NavBar from '../../components/navbar'
import useTransition from 'next-translate/useTranslation'

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
  const { t } = useTransition()
  return (
    <div className="px-6 dark:text-slate-300">
      <NavBar />
      <main className="py-16 align-center">
        <h2 className="m-0 leading-tight text-4xl text-center">
          {t('common:label_work')}
        </h2>
        <div className="mt-14">
          {work.map((item: any, index: number) => (
            <div
              key={index}
              className="max-w-6xl m-6 p-12 text-left border border-gray-200 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="...">
                  <h2 className="mb-2 text-2xl">{t(`work:${item.project}`)}</h2>
                  <p className="text-lg">{item.type}</p>
                </div>
                <div className="col-span-2 ... text-lg leading-8">
                  <p className="text-lg">{t(`work:${item.description}`)}</p>
                  <p className="font-bold">{item.stack}</p>
                  <h4 className="hover:text-blue-600">
                    <Link href={`${item.demoUrl}`} passHref={true}>
                      {t('common:visit_url')} &rarr;
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
