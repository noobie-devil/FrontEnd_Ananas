const path = require('path')

const postCSSPlugins = [
require('postcss-import'),
require('postcss-mixins'),
require('postcss-simple-vars'),
require('postcss-nested'),
require('postcss-hexrgba'),
require('autoprefixer')
]

let config = {
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app')
	},
	module: {
		rules: [
		{
			test: /\.css$/i,
			use: ['style-loader','css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
		}]
	},
	devServer: {
		before: function(app, server){
			server._watch('./app/**/*.html')
		},
		contentBase: path.join(__dirname, 'app'),
		hot: true,
		port: 3000,
	},
	mode: 'development'
}


module.exports = config