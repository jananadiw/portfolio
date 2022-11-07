import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="m-5 text-base">
            <div className="visible sm:invisible">
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li><Link href="/"><p className="hover:text-sky-600">Home</p></Link></li>
                    <li><Link href="/projects"><p className="hover:text-sky-600">Projects</p></Link></li>
                    <li><Link href="/work"><p className="hover:text-sky-600">Work</p></Link></li>
                    <li><Link href="/about"><p className="hover:text-sky-600">About</p></Link></li>
                </ul>
            </div>

            {/* <ul className="items-center justify-between flex md:invisible">
                <li><Link href="/"><p className="hover:text-sky-600">🏠</p></Link></li>
                <li><Link href="/projects"><p className="hover:text-sky-600">👩🏻‍💻</p></Link></li>
                <li><Link href="/work"><p className="hover:text-sky-600">💼</p></Link></li>
                <li><Link href="/about"><p className="hover:text-sky-600">👩🏻</p></Link></li>
            </ul> */}
        </div>
    )
}