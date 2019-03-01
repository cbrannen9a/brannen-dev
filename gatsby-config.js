module.exports = {
	siteMetadata: {
		title: 'Brannen.dev',
		description: 'Blog and Portfolio by Chris Brannen.',
		author: '@cbrannen9a',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#8e44ad',
				theme_color: '#8e44ad',
				display: 'minimal-ui',
				icon: 'src/images/brannen-icon.png', // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
}
