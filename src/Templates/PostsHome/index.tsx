import { Wrapper } from './styled'
import Card from '../../components/Card'
import { postProps } from '../../types/type'

type postsProps = {
  postsList: postProps[]
  firstCard: boolean
}

const PostsHomeTemplate = ({ postsList, firstCard }: postsProps) => {
  if (firstCard) {
    const postsM = { ...postsList[0], width: 1000 }
    console.log(postsList)
  }
  return (
    <Wrapper>
      <div className="content">
        {postsList.map((post) => (
          <Card
            firstCard={firstCard}
            key={post.slug}
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
