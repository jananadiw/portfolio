// components/layout.js

import Navbar from './navbar'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center transmission duration-200 dark:bg-neutral-900'>
      {/* <Navbar /> */}
      <Header />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}