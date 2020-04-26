import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import ProjectGrid from "../components/projectGrid/projectGrid";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../utils/helper";

export const query = graphql`
  query ProjectPageQuery {
    projects: allSanityProject(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          title
          skills {
            id
            title
            _rawDescription
          }
          url
          description
          slug {
            current
          }
        }
      }
    }
  }
`;

const Projects = (props) => {
  const { data } = props;

  const projects = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : [];

  return (
    <Layout>
      <SEO title="Projects" keywords={["gatsby", "application", "react"]} />
      <ProjectGrid projects={projects} />
    </Layout>
  );
};

export default Projects;
