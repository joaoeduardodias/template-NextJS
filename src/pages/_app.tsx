import type { AppProps } from 'next/app'
import '../styles/globals.scss'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
