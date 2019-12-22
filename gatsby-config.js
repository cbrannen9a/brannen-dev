let config = require("./config/sanity");

module.exports = {
  siteMetadata: {
    title: "Brannen.dev",
    description: "Blog and Portfolio by Chris Brannen.",
    author: "Chris Brannen",
    social: {
      twitter: "cbrannen9a"
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: config.projectId,
        dataset: config.dataset,
        watchMode: true
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-source-medium",
      options: {
        username: "@cbrannen"
      }
    },
    {
      resolve: `gatsby-transformer-sharp`
    }
  ]
};
