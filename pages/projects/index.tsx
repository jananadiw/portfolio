import Link from 'next/link'
import NavBar from '../../components/navbar'
import useTranslation from 'next-translate/useTranslation'

export async function getStaticProps() {
  const res = await fetch('https://json-portfolio-data.vercel.app/projects')
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}

function ViewMoreText(props: any) {
  const { t } = useTranslation()
  if (props.type === 'project') {
    return t('common:visit_github')
  } else {
    return t('common:visit_article')
  }
}

// TODO: Type projects
export default function Projects({ projects }: any) {
  const { t } = useTranslation()
  return (
    <div className="px-6 dark:text-slate-300">
      <NavBar />
      <main className="py-16 align-center">
        <h2 className="m-0 leading-tight text-4xl text-center">
          {t('common:label_projects')}
        </h2>

        <div className="mt-14">
          {projects.map((project: any, index: number) => (
            <div
              key={index}
              className="max-w-6xl m-6 p-12 text-left border border-gray-200 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="...">
                  <h2 className="mb-2 text-2xl">{project.name}</h2>
                  <p className="text-lg hover:text-blue-600 break-words">
                    <Link href={`${project.url}`} passHref={true}>
                      {project.url}
                    </Link>
                  </p>
                </div>
                <div className="col-span-2 ... text-lg leading-8">
                  <p>{t(`projects:${project.description}`)}</p>
                  <button className="mt-5 py-2.5 px-5 mr-2 mb-2 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-400 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <h4>
                      <Link
                        href={`${project.repoLink}`}
                        passHref={true}
                        target="_blank"
                      >
                        {ViewMoreText(project)}
                      </Link>
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
