import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Post from "../components/post/post";
import SEO from "../components/seo";

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      description
      _rawBody(resolveReferences: { maxDepth: 5 })
      mainImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const post = data.sanityPost;
  const title = post.title;
  const description = post.description;
  const imageData = post.mainImage.asset.fluid;
  const body = post._rawBody;

  return (
    <Layout>
      <SEO title={title} keywords={["gatsby", "application", "react"]} />
      <Post
        title={title}
        description={description}
        imageData={imageData}
        body={body}
      />
    </Layout>
  );
};

export default PostTemplate;
