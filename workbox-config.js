module.exports = {
	globDirectory: 'www/',
	globPatterns: [
		'**/*.{css,png,html,js}'
	],
	swDest: 'www/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};