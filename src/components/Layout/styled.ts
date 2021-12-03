import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-color: white;
  //background-color: ${(props) => props.theme.colors.primary};
  height: 100%;
`
export const Content = styled.div`
  width: 100vw;
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: 767px;
    margin: auto;
  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    width: 1169px;
    margin: auto;

  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    width: 1439px;
    margin: auto;

  `}
`
