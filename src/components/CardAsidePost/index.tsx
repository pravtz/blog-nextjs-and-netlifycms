import Image from 'next/image'
import Link from 'next/link'
import { Wrapper, LinkWrapper, ImageCard, Content, Data, Title } from './styled'
import { dataFormatPost } from '../../utils/dateFormatPost'
export type CardAsidePostProps = {
  title: string
  date: string
  thumbnail: string
  slug: string
}
const CardAsidePost = ({
  title,
  date,
  thumbnail,
  slug
}: CardAsidePostProps) => {
  const newDate = new Date(date)

  return (
    <Wrapper>
      <Link href={slug}>
        <LinkWrapper>
          <ImageCard>
            <Image width={400} height={300} src={thumbnail} />
          </ImageCard>
          <Content>
            <Data>{dataFormatPost(newDate)}</Data>
            <Title>{title}</Title>
          </Content>
        </LinkWrapper>
      </Link>
    </Wrapper>
  )
}
export default CardAsidePost
