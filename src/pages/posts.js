import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import PostGrid from "../components/postGrid/postGrid";
import SEO from "../components/seo";
import { filterOutDocsWithoutSlugs, mapEdgesToNodes } from "../utils/helper";

export const query = graphql`
  query PostPageQuery {
    posts: allSanityPost(
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
  }
`;

const Posts = (props) => {
  const { data } = props;

  const posts = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : [];

  return (
    <Layout>
      <SEO title="Posts" keywords={["gatsby", "application", "react"]} />
      <PostGrid posts={posts} />
    </Layout>
  );
};

export default Posts;
