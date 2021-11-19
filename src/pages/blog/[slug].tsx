import fs from 'fs'
import path from 'path'
import Layout from '../../components/Layout'

const Post = ({ blogpost }: any) => {
  if (!blogpost) return <div>not found</div>
  const { html, attributes } = blogpost

  return (
    <Layout>
      <article>
        <h1>{attributes.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
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

export async function getStaticProps({ params }: any) {
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
