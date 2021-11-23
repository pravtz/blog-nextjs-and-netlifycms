/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  }
}
