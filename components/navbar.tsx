import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="m-8 dark:text-slate-300">
            <div className="hidden md:block text-base">
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li><Link href="/"><p className="hover:text-sky-600">Home</p></Link></li>
                    <li><Link href="/work"><p className="hover:text-sky-600">Work</p></Link></li>
                    <li><Link href="/projects"><p className="hover:text-sky-600">Projects</p></Link></li>
                    <li><Link href="/about"><p className="hover:text-sky-600">About</p></Link></li>
                </ul>
            </div>
            <div className="block md:hidden justify-center px-18 text-xl">
                <ul className="justify-between flex items-center">
                    <li><Link href="/"><p>🏠</p></Link></li>
                    <li><Link href="/work"><p>💼</p></Link></li>
                    <li><Link href="/projects"><p>👩🏻‍💻</p></Link></li>
                    <li><Link href="/about"><p>👩🏻</p></Link></li>
                </ul>
            </div>
        </div>
    )
}