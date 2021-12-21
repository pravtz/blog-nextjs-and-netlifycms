import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.section``
export const Description = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-size: 32px;
  color: #666;
  margin-bottom: calc(16px * 2);
`
export const Title = styled.h1`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 70px;
  color: #666;
  text-align: center;
`
export const Content = styled.div`
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
    margin-top: 16px;
    margin-bottom: 16px;

    text-align: left;
  }
  p {
    font-family: 'Ubuntu', sans-serif;
  }
  img {
    max-width: 100%;
    margen: auto;
    text-align: center;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  blockquote {
    color: #666;
    border-left: 0.3rem solid silver;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid silver;
    margin: 3rem auto;
  }

  code {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
    overflow-wrap: break-word;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  }
  pre > code {
    white-space: pre;
  }
`
