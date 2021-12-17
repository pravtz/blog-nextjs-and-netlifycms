import { Wrapper } from './styled'
import Card from '../../components/Card'
import { postProps } from '../../types/type'

type postsProps = {
  postsList: postProps[]
  firstCard: boolean
}

const PostsHomeTemplate = ({ postsList, firstCard }: postsProps) => {
  return (
    <Wrapper>
      <div className="content">
        {postsList.map((post, indice) => (
          <Card
            width={indice == 0 && firstCard ? 1024 : 768}
            height={indice == 0 && firstCard ? 768 : 576}
            layoutImage={indice == 0 && firstCard ? 'responsive' : ''}
            firstCard={firstCard}
            key={indice}
            imageHeader={post.attributes.thumbnail}
            dataPost={'11-22-11'}
            title={post.attributes.title}
            descriptionPost={post.attributes.description}
            category={post.attributes.category || 'ASSUNTOS GERAIS'}
            linkAs={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default PostsHomeTemplate
