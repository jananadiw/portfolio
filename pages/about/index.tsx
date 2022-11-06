import Link from 'next/link'
import styles from '../../styles/home.module.scss'
import page_style from '../../styles/about.module.scss'
import ccPreviewImage from '../../public/cconfetti.png';
import NavBar from '../../components/navbar';

export default function About() {

    const openEmailClient = () => {
        window.open('mailto:jananadiw@gmail.com')
    }

    const downloadResume = () => {
        fetch('Jananadi.pdf').then((res) => {
            res.blob().then((blob) => {
                const resumeUrl = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = resumeUrl;
                alink.download = 'Jananadi.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className={styles.container}>
        <NavBar />
        <main className={styles.main}>
            <h2 className={page_style.title}>Little about me 👩🏻‍💼</h2>

            <p className={styles.description}></p>
                <div className={page_style.container}>
                    <div className="mb-8">
                    <p>Hey, I'm Jananadi. I'm a <span className="text-sky-600">software engineer</span> based in South Korea. Currently, I'm working as a <span className="text-sky-600"> full-stack developer </span> building web applications in the industry of Travel/Hospitality - Tech. </p><br/>
                    <p>Previously, I worked in <span className="text-sky-600">R&D</span> as a <span className="text-sky-600">back-end</span> developer in <span className="text-sky-600">IoT/Safety-Tech industry</span>, building APIs & Web Services.</p><br/>
                    <p>I occasionally write about <span className="text-sky-600">DevOps/AWS.</span> And, sometimes I dabble with a paintbrush trying to put my <span className="text-sky-600">creative</span> cells in to action. </p><br/>
                    </div>
                    <div>
                    <p className="text-red-400">Reach out to me 📬</p>
                    <div className="w-2/5 flex justify-between cursor-pointer">
                        <Link href="https://github.com/plutach"><p className="hover:text-red-400">Github</p></Link> ⚬ 
                        <Link href="https://www.linkedin.com/in/jananadiw/"><p className="hover:text-red-400">LinkedIn</p></Link> ⚬ 
                        <p className="hover:text-red-400" onClick={openEmailClient}>Email</p><br/>
                    </div>
                    <div className="mt-8">
                        <button className="bg-red-300 hover:bg-red-400 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center" onClick={downloadResume}>
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download Resume</span>
                        </button>
                    </div>
                    </div>
                </div>
        </main>
        </div>
    )
}
