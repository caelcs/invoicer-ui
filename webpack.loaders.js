module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public\/)/,
		loader: "babel"
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(bower_components)/,
		loader: "file"
	},
	{
		test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		loader: "url-loader?limit=10000&mimetype=application/font-woff"
	},
	{
		test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		loader: "url-loader?limit=10000&mimetype=application/font-woff"
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(bower_components)/,
		loader: "url-loader?limit=10000&mimetype=application/octet-stream"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /\.gif/,
		exclude: /(bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		exclude: /(bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	{
		test: /\.png/,
		exclude: /(bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/png"
	}
];
