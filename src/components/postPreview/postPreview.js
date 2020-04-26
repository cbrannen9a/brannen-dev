import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { buildImageObj } from "../../utils/helper";
import { imageUrlFor } from "../../utils/imageUrl";

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

const PostPreview = ({ title, description, slug, mainImage }) => {
  return (
    <StyledPreview>
      <Link to={`/${slug.current}/`}>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(300)
              .height(Math.floor((9 / 16) * 300))
              .auto("format")
              .url()}
            alt={title}
          />
        )}
      </Link>
      <h2>
        <Link to={`/${slug.current}/`}>{title}</Link>
      </h2>
      <InternalLink colour="link" to={`/${slug.current}/`}>
        <Icon icon={faEye} />
        View
      </InternalLink>
      <p>{description}</p>
    </StyledPreview>
  );
};

export default PostPreview;
