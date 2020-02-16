import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import Image from "gatsby-image";
import PropTypes from "prop-types";

import ExternalLink from "../elements/externalLink";
import InternalLink from "../elements/internalLink";

import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  margin-top: 6px;
  margin-right: 3px;
`;

const StyledPreview = styled.div`
  h2 {
    font-size: 1.75rem;
    margin-top: 0.5rem;
  }

  h2 a {
    color: #222;
    text-decoration: none;
  }

  p {
    margin-top: 0.5rem;
  }
`;

const PostPreview = ({ source, title, description, slug, imageData }) => {
  switch (source) {
    case "medium":
      return (
        <StyledPreview>
          <a href={slug}>
            <img src={imageData} alt={title} width="150" />
          </a>
          <h2>
            <a href={slug}>{title}</a>
          </h2>
          <ExternalLink colour="link" to={slug}>
            <Icon icon={faEye} />
            View on Medium
          </ExternalLink>
          <p>{description}</p>
        </StyledPreview>
      );
    case "sanity":
      return (
        <StyledPreview>
          <Link to={slug}>
            <Image
              fluid={imageData}
              alt={title}
              style={{ width: "150px", margin: "auto" }}
            />
          </Link>
          <h2>
            <Link to={slug}>{title}</Link>
          </h2>
          <InternalLink colour="link" to={slug}>
            <Icon icon={faEye} />
            View
          </InternalLink>
          <p>{description}</p>
        </StyledPreview>
      );
    default:
      return null;
  }
};

PostPreview.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageData: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  description: PropTypes.string.isRequired
};

export default PostPreview;
