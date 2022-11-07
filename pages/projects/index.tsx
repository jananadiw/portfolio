import Link from 'next/link'
import styles from '../../styles/home.module.scss'
import project_style from '../../styles/projects.module.scss'
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
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
        <h2 className={project_style.title}>Projects & Articles 👩🏻‍💻</h2>

        <div className="mt-14">
        { projects.map((project: any, index: number) => (
            <div key={index} className={project_style.container}>
            <div className={project_style.container__row}>
              <div className={project_style.container__column}>
                <h2>{project.name}</h2>
                <p className="antialiased"><Link href={`${project.url}`} passHref={true}>{project.url}</Link></p>
              </div>
              <div className={project_style.container__column}>
                <p className="antialiased">{project.description}</p>
                <h4><Link href={`${project.repoLink}`} passHref={true}>{getViewMoreText(project)} &rarr;</Link></h4>
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
