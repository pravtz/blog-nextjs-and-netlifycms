import Link from 'next/link'
import Layout from '../../components/Layout'
import { importBlogPosts } from '../../services/apiMarkdown'
import { AttributesProps } from './[slug]'
import Image from 'next/image'

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
        <div key={post.slug} className="post">
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>
              <Image
                src={post.attributes.thumbnail}
                alt={post.attributes.title}
                width={500}
                height={500}
              />

              <h2>{post.attributes.title}</h2>
            </a>
          </Link>
        </div>
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
