import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import InternalLink from "../elements/internalLink";
import Title from "../elements/title";
import BlockContent from "../elements/blockContent/blockContent";
import { media } from "../styled";
import firebase from "gatsby-plugin-firebase";

const Content = styled.div`
  padding: 1rem;
  text-align: center;
  ${media.minLarge} {
    padding: 2.5rem 7rem;
  }
`;

const Post = ({ title, description, imageData, body }) => {
  firebase.analytics().logEvent(`Post: ${title}`);
  return (
    <Content>
      <Title darkText>{title}</Title>
      <p>{description}</p>
      <Image
        fluid={imageData}
        alt={title}
        style={{ maxWidth: 700, margin: "auto" }}
      />
      <BlockContent blocks={body} />
      <p>
        <InternalLink colour={"light"} to="/">
          &larr; back to all posts
        </InternalLink>
      </p>
    </Content>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,

  imageData: PropTypes.object.isRequired,
  body: PropTypes.array.isRequired
};

export default Post;
