import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  border-top: 1px solid #b9b9b9;
  display: flex;
  flex-direction: column;
  margin-top: var(--spacing-betwen-box-align);
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
  margin: var(--spacing-betwen-box-align) auto;

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: 767px;

  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    width: 1169px;

  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    width: 1439px;

  `}

  .content-main {
    display: flex;
    justify-content: center;
  }
`
export const Copyright = styled.div`
  margin-top: var(--spacing-betwen-box-align);
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: calc(var(--spacing-betwen-box-align) / 4);
`
const contactAndProject = styled.div`
  width: 40%;
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    margin-bottom: calc(var(--spacing-betwen-box-align) / 2);
  }
  ul {
    li {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 200;
      font-size: 18px;

      list-style: none;
    }
  }
`
export const Contact = styled(contactAndProject)`
  border-right: 1px solid #b9b9b9;
  margin-right: calc(var(--spacing-betwen-box-align) / 2);
  padding-right: calc(var(--spacing-betwen-box-align) / 4);

  text-align: right;
  h4 {
    text-align: right;
  }
  ul {
    padding-right: calc(var(--spacing-betwen-box-align) / 4);
    li {
      text-align: right;
    }
  }
`
export const Projects = styled(contactAndProject)`
  border-left: 1px solid #b9b9b9;
  margin-left: calc(var(--spacing-betwen-box-align) / 2);
  padding-left: calc(var(--spacing-betwen-box-align) / 4);
  text-align: left;
  h4 {
    text-align: left;
  }
  ul {
    padding-left: calc(var(--spacing-betwen-box-align) / 4);
    li {
      text-align: left;
    }
  }
`
