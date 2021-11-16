const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const root_path = require('./_utils/rootPath')
const configuration = require('../webpack.c')
const common = require('./webpack.common')


module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false, sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { path: './postcss.config' }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    })
  ],
  devServer: {
    static: {
      directory: root_path(),
    },
    open: configuration.serverOpen || true,
    port: configuration.serverPort || 8080,
    host: configuration.serverHost || '0.0.0.0',
    hot: true,
    compress: true
  }
})
