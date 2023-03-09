// components/layout.js

import Navbar from './navbar'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <>
      <div className='flex flex-col items-center justify-center dark:bg-neutral-900'>
      {/* <Navbar /> */}
      <Header />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}