module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    {
      name: '@storybook/addon-essentials',
      options: {
        viewport: false,
      }
    }
  ],
  "core": {
    "builder": "webpack5"
  },
  "typescript": { "reactDocgen": false },
}
