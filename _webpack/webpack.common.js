const path = require('path')
const webpack = require('webpack')
const root_path = require('./_utils/rootPath')

module.exports = {
	entry: {
		main: ['../_resources/scripts/main.js', '../_resources/scss/style.scss']
	},
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.join(root_path(), '/assets/'),
		publicPath: '/assets/'
	},
	resolve: {
		modules: [ path.resolve(__dirname, 'node_modules/') ]
	},
}
