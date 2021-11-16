const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')


module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader', 
            options: { 
              url: false, 
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { path: './postcss.config' } 
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ]
  }
})
