'use strict';

const webpack = require('webpack');
const path = require("path");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

	entry: {
		app: [path.resolve(__dirname, 'src/index.js')]
	},

	output: {
		pathinfo: true,
		path: path.resolve(__dirname, 'build/'),
		publicPath: 'build/',
		filename: 'bundle.js'
	},

	externals: {
		phaser: {
			umd: "phaser",
			commonjs2: "phaser",
			commonjs: "phaser",
			amd: "phaser",
			// indicates global variable should be used
			root: "Phaser"
		},
		underscore: {
			umd: "underscore",
			commonjs2: "underscore",
			commonjs: "underscore",
			amd: "underscore",
			// indicates global variable should be used
			root: "_"
		},
		"phaser-ui-comps": {
			umd: "phaser-ui-comps",
			commonjs2: "phaser-ui-comps",
			commonjs: "phaser-ui-comps",
			amd: "phaser-ui-comps",
			// indicates global variable should be used
			root: "PhaserComps"
		}
	},

	module: {
		rules: [
			{
				test: [ /\.vert$/, /\.frag$/ ],
				use: 'raw-loader'
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				include: path.join(__dirname, 'src/')
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'CANVAS_RENDERER': JSON.stringify(true),
			'WEBGL_RENDERER': JSON.stringify(true),
			'EXPERIMENTAL': JSON.stringify(true)
		})
	],

	/*optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: 'all'
		}
	},*/

	mode: "production"
	//mode: "development"
};
