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
    flex-direction: column;

    ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: center;
  `}
  }
`
export const Copyright = styled.div`
  margin-top: var(--spacing-betwen-box-align);

  text-align: center;
  font-size: 14px;
  font-weight: 200;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: calc(var(--spacing-betwen-box-align) / 4);
`
const contactAndProject = styled.div`
  margin-bottom: calc(var(--spacing-betwen-box-align));
  h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
  }
  text-align: center;
  ul {
    text-align: center;
    li {
      text-align: center;
      font-family: 'Ubuntu', sans-serif;
      font-weight: 200;
      list-style: none;
      font-size: 16px;
    }
  }

  ${media.greaterThan('medium')`

    width: 40%;
    h4 {
    margin-bottom: calc(var(--spacing-betwen-box-align) / 2);
  }
  ul {
    li {
      font-size: 18px;
    }
  }
  `}
`
export const Contact = styled(contactAndProject)`
  border-bottom: 1px solid #b9b9b9;
  padding-bottom: calc(16px / 2);

  ${media.greaterThan('medium')`
  border-bottom: none;

    margin-right: calc(var(--spacing-betwen-box-align) / 2);
  padding-right: calc(var(--spacing-betwen-box-align) / 4);
    border-right: 1px solid #b9b9b9;
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
  `}
`
export const Projects = styled(contactAndProject)`
  border-top: 1px solid #b9b9b9;
  padding-top: calc(16px / 2);
  ${media.greaterThan('medium')`
  border-top: none;
  padding-top: 0;

    margin-left: calc(var(--spacing-betwen-box-align) / 2);
  padding-left: calc(var(--spacing-betwen-box-align) / 4);
   border-left: 1px solid #b9b9b9;
   h4 {
    text-align: left;
  }
  ul {
    padding-left: calc(var(--spacing-betwen-box-align) / 4);
    li {
      text-align: left;
    }
  }
  `}
`
