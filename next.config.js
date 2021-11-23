/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: false,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    })
    // if (!isServer) {
    //   // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
    //   configuration.resolve.fallback = {
    //     fs: false
    //   }
    // }

    return configuration
  }
}
