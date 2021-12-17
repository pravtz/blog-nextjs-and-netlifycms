import Layout from '../../components/Layout'
import { importBlogPosts } from '../../services/apiMarkdown'
import { AttributesProps } from '../../types/type'

import PostsHomeTemplate from '../../Templates/PostsHome'

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
      <PostsHomeTemplate postsList={postsList} firstCard={false} />
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
