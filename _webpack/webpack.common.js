const path = require('path')
const root_path = require('./_utils/rootPath')

module.exports = {
	entry: {
		main: ['../_resources/scripts/main.js'],
		style: ['../_resources/scss/style.scss']
	},
	output: {
		filename: 'scripts/[name].bundle.js',
		path: path.join(root_path(), '/assets/'),
		publicPath: '/assets/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff2?|eot|(t|o)tf)$/i,
				type: 'asset/resource',
			},
		]
	},
	resolve: {
		modules: [ path.resolve(__dirname, 'node_modules/') ],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss']
	}
}
