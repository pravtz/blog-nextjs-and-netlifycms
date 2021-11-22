import Link from 'next/link'
import Layout from '../../components/Layout'

const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../../../content/blog', false, /\.md$/)
    .keys()
    .map((relativePath: any) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path: any) => {
      const markdown = await import(`../../../content/blog/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Blog = ({ postsList }: any) => (
  <Layout>
    {postsList.map((post: any) => (
      <div key={post.slug} className="post">
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
  </Layout>
)

export async function getStaticProps() {
  const postsList = await importBlogPosts()

  return {
    props: {
      postsList
    } // will be passed to the page component as props
  }
}

export default Blog
