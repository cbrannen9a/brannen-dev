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
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Muli"]
        }
      }
    },
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
      resolve: `gatsby-transformer-sharp`
    }
  ]
};
