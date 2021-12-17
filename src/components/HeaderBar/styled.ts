import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgraundHeaderBar};
  max-width: 100vw;
  border-bottom: 1px solid silver;

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */

  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */

  `}
`
export const Content = styled.div`
  display: flex;
  height: 92px;
  justify-content: space-between;
  align-items: center;

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
export const NavBar = styled.div`
  display: none;

  ${media.greaterThan('medium')`
  display: block;
  ul {
    display: flex;
    li {
      list-style: none;

      a {
        text-decoration: none;
        font-size: 18px;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 300;
        color: #666;
        &:hover{
          color: black;
        }
      }

      &:not(:first-child)::before {
        content: '|';
        font-size: 23px;
        color: #b9b9b9;
        margin-left: 13px;
        margin-right: 13px;
      }
    }
  }
  `}
`

export const ButtonResponsive = styled.div`
  margin-right: 16px;
  button {
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.colors.backgraundHeaderBar};
    color: #666;
    &:hover {
      color: black;
    }
  }
  ${media.greaterThan('medium')`
  display: none;
`}
`
export const Brand = styled.div`
  margin-left: 16px;
  ${media.greaterThan('small')`
    /* screen width is greater than 768px (medium) */
    h1:after{
      content: ' - small';
      font-size: 14px;
    }
  `}
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    h1:after{
      content: ' - medium';
      font-size: 14px;
    }
  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    h1:after{
      content: ' - large';
      font-size: 14px;
    }
  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    h1:after{
      content: ' - huge';
      font-size: 14px;
    }
  `}
`
export const SocialMedia = styled.div`
  margin-right: 16px;
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    ul {
      display: flex;
      li {
        list-style: none;
        margin-left: 5px;
        margin-right: 5px;
        a {
          text-decoration: none;
          color: #666;
          &:hover{
            color: black;
          }
        }

      }
    }
  `}
`
