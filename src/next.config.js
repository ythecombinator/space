const BabiliPlugin = require('babili-webpack-plugin');
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
	webpack(config, { dev }) {

		if (dev) {
			return config;
		}

		config.plugins.push(
			new SWPrecacheWebpackPlugin({
				filename: 'sw.js',
				minify: true,
				verbose: true,
				staticFileGlobsIgnorePatterns: [/\.next\//],
				forceDelete: true,
				runtimeCaching: [
					{
						handler: 'fastest',
						urlPattern: /[.](webp|jpg|css)/
					},
					{
						handler: "networkFirst",
						urlPattern: /^https.*/
					}
				]
			})
		);

		config.plugins.push(new BabiliPlugin());

		config.resolve.alias = {
			"react": "preact-compat/dist/preact-compat",
			"react-dom": "preact-compat/dist/preact-compat"
		};

		config.plugins = config.plugins.filter(plugin => {
			return plugin.constructor.name !== 'UglifyJsPlugin';
		});

		return config;
	},
	distDir: './../build'
};
