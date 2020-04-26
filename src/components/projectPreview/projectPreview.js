import React from "react";
import { buildImageObj } from "../../utils/helper";
import { imageUrlFor } from "../../utils/imageUrl";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Skills from "../skills/skills";
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

const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: lightgray;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectPreview = ({ title, description, slug, mainImage, skills }) => (
  <StyledPreview>
    <LeadMediaThumb>
      <Link to={`/${slug}/`}>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={title}
          />
        )}
      </Link>
    </LeadMediaThumb>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <InternalLink colour="link" to={`/${slug}/`}>
      <Icon icon={faEye} />
      View
    </InternalLink>
    <p>{description}</p>
    <Skills skills={skills} light={true} />
  </StyledPreview>
);

export default ProjectPreview;
