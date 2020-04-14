import { graphql, useStaticQuery } from "gatsby";
import firebase from "../utils/firebase";
import React from "react";
import Layout from "../components/layout/layout";
import PostGrid from "../components/postGrid/postGrid";
import ProjectGrid from "../components/projectGrid/projectGrid";
import SEO from "../components/seo";
import Welcome from "../components/welcome/welcome";

import { postResolver } from "../utils/postResolver";

import styled from "styled-components";
import { media } from "../components/styled/";

const Columns = styled.div`
  ${media.minSmall} {
    display: flex;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;

    &:last-child {
      margin-bottom: -0.75rem;
    }
  }
`;

const Column = styled.div`
  ${media.minSmall} {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
  }
`;

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
  firebase.analytics();
  return (
    <Layout>
      <SEO title="Home" />
      <Columns>
        <Column>
          <Welcome author={author} skills={skills} />
          <PostGrid posts={posts} isMainPage />
        </Column>
        <Column>
          <ProjectGrid projects={projects} isMainPage />
        </Column>
      </Columns>
    </Layout>
  );
};

export default Home;
