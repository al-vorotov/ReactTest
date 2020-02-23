const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

export default {
  output: {
    filename: '[name].js',
    path: path.resolve('build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.ts', '.tsx', '.js', '.jsx'],
  },

  mode: process.env.NODE_ENV || 'development',

  entry: {
    client: './src/index.tsx',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: 'tslint.json',
              failOnHint: false,
              tsConfigFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version'],
                }),
              ],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /.(jpg|jpeg|png|mp3)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([path.resolve('./static/index.html')]),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './static/index.html',
    }),
    new ExtractTextPlugin('style.css'),
  ],

  devServer: {
    proxy: [{
      path: '/api/',
      target: 'http://localhost:4000',
    }],
    hot: true,
    overlay: {
      error: true,
      warning: true,
    },
    port: 3000,
    historyApiFallback: true,
  },

  devtool: 'cheap-module-source-map',
};
