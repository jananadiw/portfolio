// components/layout.js

// import Navbar from './navbar'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <div className='min-h-screen flex flex-col items-center transmission duration-200 dark:bg-neutral-900'>
      <main>{children}</main>
      <Footer />
      </div>
    </>
  )
}