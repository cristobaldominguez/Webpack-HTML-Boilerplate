const path = require('path')
const webpack = require('webpack')
const root_path = require('./_utils/rootPath')

module.exports = {
	entry: {
		main: ['./src/scripts/main.js', './src/scss/style.scss']
	},
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.join(root_path(), '/public/assets/'),
		publicPath: '/assets/'
	}
}
