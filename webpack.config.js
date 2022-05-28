const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: './main.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'https://athma-vasi.github.io/Todo-List-App/',
	},
	mode: 'development',
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.ts$/i,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
			},
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js'],
	},
}
