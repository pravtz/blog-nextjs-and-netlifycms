import Link from 'next/link'
import Layout from '../../components/Layout'
import { importBlogPosts } from '../../services/apiMarkdown'

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
