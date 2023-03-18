import Link from 'next/link'
import useTransition from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useScrollPosition } from './hooks/useScrollPosition'

const menuItems = [
  { id: 'home', name: 'nav_home', path: '/' },
  { id: 'work', name: 'nav_work', path: '/work' },
  { id: 'projects', name: 'nav_projects', path: '/projects' },
  { id: 'about', name: 'nav_about', path: '/about' },
]

export default function NavBar() {
  const { t } = useTransition('common')
  const router = useRouter()
  const scrollPosition = useScrollPosition();

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  }
  
  return (
    <div className={classNames(scrollPosition > 0 ? 'shadow': 'shadow-none', 'transition-shadow m-0 p-16 dark:text-slate-300 dark:bg-neutral-900 bg-white h-20 items-center align-center sticky top-0 w-full')}>
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
