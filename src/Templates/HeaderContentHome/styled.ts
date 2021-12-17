import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin-bottom: 4em;
  padding-left: 16px;
  padding-right: 16px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-itens: center;
  justify-content: center;

  ${media.greaterThan('medium')`
    .whapper-profile{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

    }

  `}
`
export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 200;
  color: #666;
  text-align: center;
  margin-bottom: calc(16px / 2);
  ${media.greaterThan('small')`
    font-size: 60px
  `}
  ${media.greaterThan('medium')`
    font-size: 74px;
  `}
  ${media.greaterThan('large')`
    font-size: 86px;
  `}
`
export const Description = styled.h3`
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  font-weight: 200;
  margin-top: calc(16px / 2);
  line-height: 25px;
  color: #666;
  text-align: center;
  margin-bottom: calc(16px * 3);

  ${media.greaterThan('small')`
  font-size: 18px;

  `}

  ${media.greaterThan('medium')`
    text-align: left;
    font-size: 24px;
    line-height: 28px;

  `}
  ${media.greaterThan('large')`
    font-size: 28px;
    line-height: 32px;
  `}
`
export const ImageWrapper = styled.div`
  ${media.greaterThan('medium')`
    min-width: 50%;
    margin-right: 16px;
  `}
  div {
    margin: auto;
    text-align: center;
  }
  .image-profile {
    border-radius: 20px;
  }
`
export const ContentHtml = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 200;
    color: #666;
    margin-bottom: 16px;
    ${media.greaterThan('small')`
    font-size: 28px;
    `}
    ${media.greaterThan('medium')`
    font-size: 30px;
    `}
    ${media.greaterThan('large')`
      font-size: 60px
    `}
  }
  p {
    font-family: 'Ubuntu', sans-serif;
    font-size: 24px;
    font-weight: 200;
    line-height: 40px;
    color: #666;
    ${media.greaterThan('small')`
    font-size: 16px;
    line-height: 28px;
    `}
  }
  ${media.greaterThan('medium')`
    text-align: left;
    margin-left: calc(16px / 2);
  `}
`
