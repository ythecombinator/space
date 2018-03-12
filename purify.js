const purify = require('purify-css');

const content = [
	'./src/pages/*.js',
	'./src/layouts/*.js',
	'./src/components/*.js'
];
const css = [''];
const options = {
  minify: true,
  info: true
};

purify(content, css, options);
