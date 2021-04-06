module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/addon-postcss'
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ]
}
