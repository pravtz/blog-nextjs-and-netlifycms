import Image from 'next/image'
import Link from 'next/link'
import {
  Wrapper,
  Content,
  ImagemHeader,
  DatePost,
  Title,
  DescriptionPost
} from './styled'

export type CardPostProps = {
  imageHeader: string
  dataPost: string
  title: string
  descriptionPost?: string
  link?: string
  linkAs?: string
}

const Card = ({
  imageHeader,
  dataPost,
  title,
  descriptionPost,
  linkAs
}: CardPostProps) => {
  return (
    <Wrapper>
      <Content>
        <ImagemHeader>
          <Image src={imageHeader} alt={title} width={500} height={500} />
        </ImagemHeader>
        <DatePost>
          <p>{dataPost}</p>
        </DatePost>
        <Link href="/blog/[slug]" as={linkAs}>
          <div>
            <Title>
              <h1>{title}</h1>
            </Title>
            <DescriptionPost>
              <p>{descriptionPost || 'without description'}</p>
            </DescriptionPost>
          </div>
        </Link>
      </Content>
    </Wrapper>
  )
}
export default Card
