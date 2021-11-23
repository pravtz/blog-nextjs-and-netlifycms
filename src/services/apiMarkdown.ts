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
export const slugs = async () => {
  const slugFiles = require
    .context('../../content/blog', false, /\.md$/)
    .keys()
    .map((relativePath: string) => relativePath.substring(2))
  console.log(slugFiles)

  return slugFiles
}
