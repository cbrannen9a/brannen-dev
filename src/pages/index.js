import { graphql } from "gatsby";
import React, { useEffect } from "react";
import firebase from "gatsby-plugin-firebase";
import CookieConsent from "react-cookie-consent";
import Layout from "../components/layout/layout";
import PostGrid from "../components/postGrid/postGrid";
import ProjectGrid from "../components/projectGrid/projectGrid";
import SEO from "../components/seo";
import Welcome from "../components/welcome/welcome";

import styled from "styled-components";
import { media } from "../components/styled/";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../utils/helper";

const Columns = styled.div`
  ${media.minSmall} {
    display: flex;
    margin-left: -0.75rem;
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

export const query = graphql`
  query IndexPageQuery {
    author: sanityAuthor(name: { eq: "Chris Brannen" }) {
      name
      _rawBio
      twitter
      github
      email
    }
    posts: allSanityPost(
      limit: 6
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
          _rawBody
          description
          slug {
            current
          }
        }
      }
    }
    devPosts: allDevArticles {
      edges {
        node {
          article {
            id
            title
            description
            social_image
            canonical_url
            published_at
          }
        }
      }
    }

    projects: allSanityProject(
      limit: 6
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
          description
          url
          skills {
            id
            title
            _rawDescription
          }
          slug {
            current
          }
        }
      }
    }
    skills: allSanitySkills(
      sort: { fields: [group, subGroup, order], order: ASC }
    ) {
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
  }
`;

const Home = (props) => {
  const { data, errors } = props;

  const projects = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : [];
  const author = data.author;
  const skills = (data || {}).skills ? mapEdgesToNodes(data.skills) : [];

  const posts = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : [];

  const devPosts = (data || {}).devPosts
    ? mapEdgesToNodes(data.devPosts, "node")
    : [];
  console.log(data.devPosts);
  const allPosts = [...posts, ...devPosts];
  console.log(allPosts);

  useEffect(() => {
    if (!firebase) {
      return;
    }
    firebase.analytics();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Columns>
        <Column>
          <Welcome author={author} skills={skills} />
          <PostGrid posts={allPosts} isMainPage />
        </Column>
        <Column>
          <ProjectGrid projects={projects} isMainPage />
        </Column>
      </Columns>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </Layout>
  );
};

export default Home;
