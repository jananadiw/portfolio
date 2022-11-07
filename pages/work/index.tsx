import Link from 'next/link'
import styles from '../../styles/home.module.scss'
import page_style from '../../styles/work.module.scss'
import NavBar from '../../components/navbar';

export async function getStaticProps() {
    const res = await fetch('https://json-portfolio-data.vercel.app/work')
    const work = await res.json();
    return {
        props: {
            work,
        },
    }
}

// TODO: Type projects
export default function Work({ work }: any) {

return (
    <div className={styles.container}>
    <NavBar />
    <main className={styles.main}>
        <h2 className={page_style.title}>Work Projects 💼 </h2>
        <div className="mt-14">
        { work.map((item: any, index: number) => (
            <div key={index} className={page_style.container}>
            <div className={page_style.container__row}>
            <div className={page_style.container__column}>
                <h2>{item.project}</h2>
                <p>{item.type}</p>
            </div>
            <div className={page_style.container__column}>
                <p>{item.description}</p>
                <p><strong>{item.stack}</strong></p>
                <h4><Link href={`${item.demoUrl}`} passHref={true}>Product Url &rarr;</Link></h4>
            </div>
            </div>
            </div>
        ))}
        </div>
    </main>
    </div>
)
}
