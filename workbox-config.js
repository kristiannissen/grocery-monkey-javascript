module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{svg,ico,html,png,json,txt,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^d/
	]
};