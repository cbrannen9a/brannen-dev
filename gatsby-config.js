module.exports = {
	siteMetadata: {
		title: 'Brannen.dev',
		description: 'Blog and Portfolio by Chris Brannen.',
		author: 'Chris Brannen',
		social: {
			twitter: 'cbrannen9a',
		},
	},
	plugins: [
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: 'o44u55ke',
				dataset: 'production',
				watchMode: true
			}
		}
	]
};
