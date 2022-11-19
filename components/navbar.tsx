import Link from 'next/link'
import useTransition from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const menuItems = [
  { id: 'home', name: 'nav_home', path: '/' },
  { id: 'work', name: 'nav_work', path: '/work' },
  { id: 'projects', name: 'nav_projects', path: '/projects' },
  { id: 'about', name: 'nav_about', path: '/about' },
]

export default function NavBar() {
  const { t } = useTransition('common')
  const router = useRouter()
  return (
    <div className="m-8 p-8 dark:text-slate-300 h-16 items-center align-center ">
      <div className="hidden md:block text-base">
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
          {menuItems.map((menu) => {
            return (
              <li key={menu.id}>
                <Link href={menu.path}>
                  <p
                    className={
                      menu.path === router.pathname
                        ? 'text-indigo-400 hover:text-indigo-300'
                        : 'text-base hover:text-indigo-400'
                    }
                  >
                    {t(`${menu.name}`)}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="block md:hidden justify-center px-18 text-xl">
        <ul className="justify-between flex items-center">
          <li>
            <Link href="/">
              <p>🏠</p>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <p>💼</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p>👩🏻‍💻</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>👩🏻</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
