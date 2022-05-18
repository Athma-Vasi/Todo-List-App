const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
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
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js'],
	},
}
