import { ListPostPromisse } from '../types/type'

export const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../../content/blog', false, /\.md$/)
    .keys()
    .map((relativePath: string) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path: string) => {
      const markdown = await import(`../../content/blog/${path}`)

      const r = { ...markdown, slug: path.substring(0, path.length - 3) }

      return r
    })
  )
}
export const ListPost = async () => {
  const slugFiles = require
    .context('../../content/blog', false, /\.md$/)
    .keys()
    .map((relativePath: string) => relativePath.substring(2))

  return Promise.all<ListPostPromisse>(
    slugFiles.map(async (path: string) => {
      const markdown = await import(`../../content/blog/${path}`)

      // const e = l.filter((name) => {
      //   return name === 'Tecnologia'
      // })

      const r = {
        ...markdown.attributes,
        slug: path.substring(0, path.length - 3)
      }

      return r
    })
  )
}

export const categoryPosts = async (
  category: string
): Promise<ListPostPromisse[]> => {
  const list = await ListPost()

  return list.filter((post) => post.category == category)
}
