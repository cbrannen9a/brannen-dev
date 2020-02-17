import React from "react";

import PropTypes from "prop-types";

import { Link } from "gatsby";

import Image from "gatsby-image";
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

const ProjectPreview = ({ title, description, slug, imageData, skills }) => (
  <StyledPreview>
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`}>{title}</Link>
    </h2>
    <InternalLink colour="link" to={`/${slug}/`}>
      <Icon icon={faEye} />
      View
    </InternalLink>
    <p>{description}</p>
    <Skills skills={skills} />
  </StyledPreview>
);

ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
};

export default ProjectPreview;
