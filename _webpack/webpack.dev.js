const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
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
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles/style.css' }),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [
              autoprefixer()
          ]
      }
    }),
    new CleanTerminalPlugin()
  ],
  devServer: {
    open: configuration.serverOpen || true,
    port: configuration.serverPort || 8081,
    host: configuration.serverHost || '0.0.0.0',
    hot: true,
    contentBase: root_path(),
    watchContentBase: true,
    compress: true,
    disableHostCheck: true
  }
})
