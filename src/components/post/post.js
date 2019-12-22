import { Link } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";
import { Button, Title } from "rbx";
import React from "react";
import BlockContent from "../elements/blockContent/blockContent";

const Post = ({ title, description, imageData, body }) => (
  <div className="post">
    <Title>{title}</Title>
    <p>{description}</p>
    <Image
      fluid={imageData}
      alt={title}
      style={{ maxWidth: 700, margin: "auto" }}
    />
    <BlockContent blocks={body} />
    <p>
      <Button as={Link} color="light" to="/">
        &larr; back to all posts
      </Button>
    </p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,

  imageData: PropTypes.object.isRequired,
  body: PropTypes.array.isRequired
};

export default Post;
