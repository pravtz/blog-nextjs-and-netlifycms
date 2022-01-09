import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-color: white;
  background-color: ${(props) =>
    props.theme.colors.backgroundBeforeThePageFold};
  height: 100%;
`
export const Content = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: 767px;
    margin: auto;
  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    flex-direction: row;
    width: 1169px;
    margin: auto;


  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    width: 1439px;
    margin: auto;

  `}
`
export const Posts = styled.div`
  width: 100%;
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
  width: calc(100% - 350px);

  `}
`
export const Banners = styled.div`
  border: 1px solid red;
  ${media.greaterThan('large')`
    display: block;
    /* screen width is greater than 1170px (large) */
    width: 350px;

  `}
`
export const ContentBanner = styled.div`
  min-height: 200px;
  border: 1px solid green;

  ${media.greaterThan('large')`
  min-height: calc(100vh - 94px);
  margin-left: calc(2 * 16px);

  `}
`
