import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  /* html {
    font-size: 62.5%
  } */
`
export default GlobalStyled
