import LanguageSelector from './languageSelector'
import Switcher from './switcher'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className="py-8 items-center justify-center dark:text-slate-300">
      <div className="block ">
        <Switcher />
        <LanguageSelector />
      </div>
      <footer className="py-4">&copy; Jananadi Wedagedara 2022</footer>
    </div>
  )
}
