const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'auto',
	},
	mode: 'development',
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
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
				test: /\.(gif|png|jpeg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './dist/assets',
						},
					},
				],
			},

			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js'],
	},
}
