import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${media.greaterThan('medium')`
      /* screen width is greater than 768px (medium) */
      flex-direction: row;
      flex-wrap: wrap;
    `}
    ${media.greaterThan('large')`
      /* screen width is greater than 1170px (large) */

    `}
    ${media.greaterThan('huge')`
      /* screen width is greater than 1440px (huge) */

    `}
  }
`
