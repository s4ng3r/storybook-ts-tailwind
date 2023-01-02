const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },

  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../'), path.resolve(__dirname, '../')],
    };
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];
    return config;
  },
}