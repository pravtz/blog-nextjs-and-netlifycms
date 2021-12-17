import styled from 'styled-components'
import media from 'styled-media-query'

interface firstCardProps {
  firstCard: boolean
}

export const Wrapper = styled.article<firstCardProps>`
  display: flex;
  flex-direction: column;
  margin: auto;
  cursor: pointer;
  .hoverLink {
    &:hover {
      .box-wrapper-content {
        border-color: #666;
      }
      .title {
        h1 {
          color: black;
        }
      }
      .box-wrapper-content {
        .description-post {
          p {
            color: black;
          }
        }
      }
    }
  }
  ${(props) =>
    props.firstCard &&
    `&:first-child{
      width: 100%;
      margin-bottom: 48px;
      .content{
        flex-direction: column;
        flex-wrap: nowrap;
        .image-header{

          max-height: 75vh;
          overflow: hidden;
          .img-responsive {
            object-fit: cover;
            object-position: 50% 50%;

          }
        }
        .category{
          order: -2;
          text-align: center;
          font-size: 22px;


        }
        .title{
          order:-1;
          h1{
            margin-bottom: 16px;
            font-family: 'Montserrat', sans-serif;
            font-size: 60px;
            font-weight: 200;
            text-align: center;
          }
        }
      }
    }
      `}

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: calc((100% / 2) - 40px);
    margin: calc(var(--spacing-betwen-box-align) / 2);


  `}

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    width: calc((100% / 3) - 40px);
  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
  `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
export const ImagemHeader = styled.div`
  .img-responsive {
    border-radius: 20px 20px 0 0;
  }
`
export const DatePost = styled.div`
  font-family: 'Ubuntu', sans-serif;
  color: #666;
  font-size: 14px;
  font-weight: 200;
`
export const Category = styled.h4`
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Ubuntu', sans-serif;
  font-weight: 200;
  font-size: 18px;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-left: 16px;
  ${media.greaterThan('medium')`
  text-align: left;
  `}
`
export const Title = styled.div`
  text-align: center;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: 200;
    color: #666;
  }
  ${media.greaterThan('medium')`
  text-align: left;
`}
`
export const DescriptionPost = styled.div`
  p {
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 200;
    margin-top: calc(16px / 2);
    line-height: 25px;
    color: #666;
  }
`
export const BoxWrapperContent = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 0 0 20px 20px;
  border-left: 1px solid #b9b9b9;
  border-right: 1px solid #b9b9b9;
  margin-top: 16px;
  padding-bottom: 16px;
  margin-bottom: calc(16px * 2);

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `}
`
