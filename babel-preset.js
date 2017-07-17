const nextBabelPreset = require('next/babel');

nextBabelPreset.plugins = nextBabelPreset.plugins.map(plugin => {
	if (!Array.isArray(plugin) && plugin.includes('styled-jsx/babel')) {
		return require.resolve('styled-jsx-postcss/babel');
	}
	return plugin;
});

module.exports = nextBabelPreset;
