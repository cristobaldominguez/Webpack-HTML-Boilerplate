const path = require('path')
const webpack = require('webpack')
const root_path = require('./_utils/rootPath')

module.exports = {
	entry: {
		style: '../_resources/scss/style.scss',
		main: '../_resources/scripts/main.js'
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.join(root_path(), '/assets/'),
		publicPath: '/assets/'
	}
}
