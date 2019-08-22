const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')


module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, '../assets/')
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [
              autoprefixer()
          ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { 
                path: './postcss.config.js' 
              } 
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
})
