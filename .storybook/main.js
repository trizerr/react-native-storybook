const path = require('path');
const {resolve} = require("path");
const webpack = require("webpack");
const SRC_PATH = '../src';

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {


    /*
     -----UNCOMMENT IF YOU USE SVGR-----
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
     */

    config.plugins.push(new webpack.DefinePlugin({
      __DEV__: true,
    }));

    return {
      ...config,
      resolve:{
        ...config.resolve,
        extensions:[
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions,
        ],
        alias: {
          'react-native$': 'react-native-web',
          //add your custom aliases here
        }
      }
    }
  }
}
