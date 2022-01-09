import Image from 'next/image'
import Link from 'next/link'
import { CardPostProps } from '../../types/type'
import { dataFormatPost } from '../../utils/dateFormatPost'
import {
  Wrapper,
  Content,
  ImagemHeader,
  DatePost,
  Title,
  Category,
  DescriptionPost,
  BoxWrapperContent
} from './styled'

const Card = ({
  imageHeader,
  dataPost,
  title,
  descriptionPost,
  linkAs,
  category,
  firstCard,
  width,
  height,
  layoutImage
}: CardPostProps) => {
  const newDate = new Date(dataPost)
  return (
    <Wrapper firstCard={firstCard}>
      <Link href="/blog/[slug]" as={linkAs}>
        <div className="hoverLink">
          <Content className="content">
            <ImagemHeader className="image-header">
              <Image
                className="img-responsive"
                layout={layoutImage}
                src={imageHeader}
                alt={title}
                width={width}
                height={height}
                objectFit="cover"
              />
            </ImagemHeader>
            <Category className="category">{category}</Category>
            <Title className="title">
              <h1>{title}</h1>
            </Title>
            <BoxWrapperContent className="box-wrapper-content">
              <DatePost>
                <p>{dataFormatPost(newDate)}</p>
              </DatePost>
              <DescriptionPost className="description-post">
                <p>{descriptionPost || 'without description'}</p>
              </DescriptionPost>
            </BoxWrapperContent>
          </Content>
        </div>
      </Link>
    </Wrapper>
  )
}
export default Card
