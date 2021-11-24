import Layout from '../../components/Layout'
import { importBlogPosts } from '../../services/apiMarkdown'
import { AttributesProps } from './[slug]'

import Card from '../../components/Card'

type postProps = {
  html: string
  attributes: AttributesProps
  slug: string
}
type postsProps = {
  postsList: postProps[]
}

const Blog = ({ postsList }: postsProps) => {
  return (
    <Layout>
      {postsList.map((post) => (
        <Card
          key={post.slug}
          imageHeader={post.attributes.thumbnail}
          dataPost={'11-22-11'}
          title={post.attributes.title}
          descriptionPost={'sem descrição'}
          linkAs={`/blog/${post.slug}`}
        />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const postsList = await importBlogPosts()

  return {
    props: {
      postsList
    }
  }
}

export default Blog
