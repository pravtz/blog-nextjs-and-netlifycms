import Image from 'next/image'
import { Wrapper, Title, Content, Container, Description } from './styled'
import { AttributesProps } from '../../types/type'
import prism from 'prismjs'
import { useEffect } from 'react'

type PostProps = {
  html: string
  attributes: AttributesProps
}

const PostBlog = ({ html, attributes }: PostProps) => {
  useEffect(() => {
    prism.highlightAll()
  }, [html])
  return (
    <Container>
      <Wrapper>
        <Title>{attributes.title}</Title>
        <Image
          src={attributes.thumbnail}
          alt={attributes.title}
          width={1920}
          height={1080}
          layout="responsive"
        />
        <Description>{attributes.description}</Description>

        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Container>
  )
}

export default PostBlog
