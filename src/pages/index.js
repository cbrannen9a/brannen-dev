import { graphql, useStaticQuery } from "gatsby";
import { Column } from "rbx";
import React from "react";
import Layout from "../components/layout/layout";
import PostGrid from "../components/postGrid/postGrid";
import ProjectGrid from "../components/projectGrid/projectGrid";
import SEO from "../components/seo";
import Welcome from "../components/welcome/welcome";
//import "../styles/index.css";
import { postResolver } from "../utils/postResolver";

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject(sort: { fields: [publishedAt], order: DESC }, limit: 3) {
        edges {
          node {
            title
            slug {
              current
            }
            description
            url
            skills {
              id
              title
              _rawDescription
            }
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
      sanityAuthor(name: { eq: "Chris Brannen" }) {
        name
        _rawBio
        twitter
        github
        email
      }
      allSanitySkills(sort: { fields: [group, subGroup, order], order: ASC }) {
        edges {
          node {
            id
            title
            _rawDescription
            group
            subGroup
            order
          }
        }
      }
      allSanityPost(sort: { fields: [publishedAt], order: DESC }, limit: 3) {
        edges {
          node {
            publishedAt
            title
            description
            _rawBody
            slug {
              current
            }
            id
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allSanityProject.edges;
  const author = data.sanityAuthor;
  const skills = data.allSanitySkills.edges;

  const posts = postResolver({
    medium: data?.allMediumPost?.edges || [],
    sanity: data.allSanityPost.edges
  });

  return (
    <Layout>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <Column.Group>
        <Column size="one-half">
          <Welcome author={author} skills={skills} />
          <PostGrid posts={posts} isMainPage />
        </Column>
        <Column>
          <ProjectGrid projects={projects} isMainPage />
        </Column>
      </Column.Group>
    </Layout>
  );
};

export default Home;
