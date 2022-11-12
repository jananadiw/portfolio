import Link from 'next/link'
import ccPreviewImage from '../../public/cconfetti.png';
import NavBar from '../../components/navbar';

export async function getStaticProps() {
  const res = await fetch('https://json-portfolio-data.vercel.app/projects')
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  }
}

function getViewMoreText(props: any){
  if(props.type === 'project') {
    return "View Code in Github";
  } else {
    return "View Article"
  }
}

// TODO: Type projects
export default function Projects({ projects }: any) {

  return (
    <div className="px-6 dark:text-slate-300">
      <NavBar />
      <main className="min-h-screen py-16 flex flex-1 flex-col items-center align-center">
        <h2 className="m-0 leading-tight text-4xl">Projects | Writing 👩🏻‍💻</h2>

        <div className="mt-14">
        { projects.map((project: any, index: number) => (
            <div key={index} className="max-w-6xl m-6 p-12 text-left border border-gray-200 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="...">
                <h2 className='mb-2 text-2xl'>{project.name}</h2>
                <p className='text-lg hover:text-blue-600'><Link href={`${project.url}`} passHref={true}>{project.url}</Link></p>
              </div>
              <div className="col-span-2 ... text-lg leading-8">
                <p>{project.description}</p>
                <h4 className='hover:text-blue-600'><Link href={`${project.repoLink}`} passHref={true}>{getViewMoreText(project)} &rarr;</Link></h4>
              </div>
            </div>
              {/* <Image src={ccPreviewImage} alt="site-img" width={900} height={450}/> */}
            </div>
          ))}
          </div>
      </main>
    </div>
  )
}
