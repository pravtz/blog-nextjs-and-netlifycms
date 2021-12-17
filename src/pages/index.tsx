import Layout from '../components/Layout'
import { attributes, html } from '../../content/home.md'
import { importBlogPosts } from '../services/apiMarkdown'
import { postProps } from '../types/type'
import PostsHomeTemplate from '../Templates/PostsHome'
import HeaderContentHome from '../Templates/HeaderContentHome'

type postsProps = {
  postsList: postProps[]
}
type ContentHomeProps = {
  att: {
    title: string
    description: string
    date?: string
    thumbnail: string
  }
}

const Home = ({ postsList }: postsProps) => {
  const att: any = {
    title: attributes.title,
    description: attributes.description,
    thumbnail: attributes.thumbnail
  }

  return (
    <>
      <Layout>
        <HeaderContentHome attrib={att} />

        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}

        <PostsHomeTemplate postsList={postsList} firstCard />
      </Layout>
    </>
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

export default Home
