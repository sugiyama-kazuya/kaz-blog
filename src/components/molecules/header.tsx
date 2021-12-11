import { VFC } from 'react'
import frame from 'styles/frame.module.scss'
import header from 'styles/header.module.scss'
import Link from 'next/link';

const Header: VFC = () => {
  return (
    <>
      <header className={frame.header}>
        <div className={header.innder}>
          <div className={header.titleWrapper}>
            <Link href="/">
              <a>
                <h1 className={header.title}>Kazのアーカイブ</h1>
              </a>
            </Link>
            <p>学んだことをまとめています</p>
          </div>
          <div className={header.categoryListWrapper}>
            <ul className={header.categoryList}>
              <li className="category">
                <a href="">プロフィール</a>
              </li>
              <li className="category">
                <a href="">ポートフォリオ </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
