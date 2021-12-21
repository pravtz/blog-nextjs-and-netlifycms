import fs from 'fs'
import { GetStaticPropsResult } from 'next'
import path from 'path'
import Layout from '../../components/Layout'
import PostBlog from '../../Templates/PostBlog'

export type AttributesProps = {
  title: string
  date: string
  thumbnail: string
  category?: string
}
export type PostProps = {
  html: string
  attributes: AttributesProps
}
type blogpostProps = {
  blogpost: PostProps
}

const Post = ({ blogpost }: blogpostProps) => {
  if (!blogpost) return <div>not found</div>

  const { html, attributes } = blogpost

  return (
    <Layout>
      <PostBlog html={html} attributes={attributes} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/blog'))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3)

      return {
        params: { slug: trimmedName }
      }
    })

  return {
    paths,
    fallback: false // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}
type paramsProps = {
  params: {
    slug: string
  }
}
export async function getStaticProps({
  params
}: paramsProps): Promise<GetStaticPropsResult<blogpostProps>> {
  const { slug } = params

  const blogpost = await import(`../../../content/blog/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      blogpost: blogpost.default
    }
  }
}

export default Post
