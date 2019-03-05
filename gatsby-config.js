module.exports = {
	siteMetadata: {
		title: 'Brannen.dev',
		description: 'Blog and Portfolio by Chris Brannen.',
		author: '@cbrannen9a',
		social: {
			twitter: 'cbrannen9a',
		},
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'project',
				path: './content'
			}
		},
		'gatsby-transformer-json'
	]
};
