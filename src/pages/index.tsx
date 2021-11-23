import Layout from '../components/Layout'
import { attributes, html } from '../../content/home.md'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Layout>
        <h1>{attributes.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link href="/blog" as={`/blog`}>
          Blog
        </Link>
      </Layout>
    </>
  )
}

export default Home
