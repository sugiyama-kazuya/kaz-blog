import {} from 'react'
import { VFC } from 'react'
import frame from 'styles/frame.module.scss'

const Footer: VFC = () => {
  return (
    <>
      <footer className={frame.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span></span>
        </a>
      </footer>
    </>
  )
}

export default Footer
