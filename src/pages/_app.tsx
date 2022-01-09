import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyled from '../styles/global'
import defaultTheme from '../styles/theme/default'
import NextProgress from 'next-progress'
import 'prismjs/themes/prism-tomorrow.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700&family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <NextProgress color="#6b705c" height={5} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
