import { VFC } from 'react'
import Header from './header'
import Footer from './footer'
import layout from 'styles/layout.module.scss'

const Layout: VFC<any> = ({ children }) => {
  return (
    <>
      <div className={layout.container}>
        <Header />
        <div className={layout.mainWrapper}>
          <main className={layout.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
