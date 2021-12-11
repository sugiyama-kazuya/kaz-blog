import 'styles/globals.css'
import { AppProps } from 'next/app'
import { VFC } from 'react'
import '../../styles/reset.css'
import Layout from '../components/molecules/layout'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
