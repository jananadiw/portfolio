import Link from 'next/link'
import NavBar from '../../components/navbar'
import useTransition from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

export default function About() {
  const Component = (props: any) => <p {...props} />
  const { t } = useTransition('about')
  const openEmailClient = () => {
    window.open('mailto:jananadiw@gmail.com')
  }

  const downloadResume = () => {
    fetch('Resume.pdf').then((res) => {
      res.blob().then((blob) => {
        const resumeUrl = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = resumeUrl
        alink.download = 'Resume.pdf'
        alink.click()
      })
    })
  }

  return (
    <div className="px-6 dark:text-slate-300">
      <NavBar />
      <main className="py-28 align-center">
        <h2 className="m-0 leading-tight text-4xl text-center">{t('title')}</h2>
        <div className="max-w-5xl mt-14 p-6 text-xl text-left border border-gray-200 rounded-xl">
          <div className="mb-8 whitespace-pre-line">
            <Trans
              i18nKey="about:content"
              components={[
                <Component key="" />,
                <span className="text-sky-600" key="" />,
                <br key="" />,
              ]}
            />
            <br />
          </div>
          <div>
            <p className="text-red-400">{t('common:contact')}</p>
            <div className="w-2/5 flex justify-between cursor-pointer">
              <Link href="https://github.com/plutach">
                <p className="hover:text-red-400">Github</p>
              </Link>{' '}
              ⚬
              <Link href="https://www.linkedin.com/in/jananadiw/">
                <p className="hover:text-red-400">LinkedIn</p>
              </Link>{' '}
              ⚬
              <p className="hover:text-red-400" onClick={openEmailClient}>
                Email
              </p>
              <br />
            </div>
            <div className="mt-8">
              <button
                className="bg-red-300 hover:bg-red-400 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={downloadResume}
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>{t('common:download_cv')}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
