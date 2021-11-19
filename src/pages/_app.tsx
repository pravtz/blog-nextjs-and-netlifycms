import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyled from '../styles/global'
import defaultTheme from '../styles/theme/default'
import NextProgress from 'next-progress'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.svg" />
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
