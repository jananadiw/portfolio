// components/layout.js

// import Navbar from './navbar'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: any) {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}