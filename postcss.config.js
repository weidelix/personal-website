const tailwindcss = require('tailwindcss');

/**
 * Should tailwind css be used as the css framework for the application?
 * Enabled by default.
 */
let useTailwindCss = true;

let config = {
	plugins: [
		require('autoprefixer'),
  ]
};

if (useTailwindCss){
	config.plugins.unshift(tailwindcss('./tailwind.config.js'));
}

module.exports = config;