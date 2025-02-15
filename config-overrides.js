const webpack = require('webpack');

module.exports = function override(config, env) {
	config.resolve.fallback = {
		stream: require.resolve('stream-browserify'),
		assert: require.resolve('assert'),
	};

	config.plugins.push(
		new webpack.ProvidePlugin({
			process: 'process/browser',
			Buffer: ['buffer', 'Buffer'],
		})
	);

	return config;
};
