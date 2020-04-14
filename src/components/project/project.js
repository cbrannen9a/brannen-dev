import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "gatsby-image";
import InternalLink from "../elements/internalLink";
import Title from "../elements/title";
import BlockContent from "../elements/blockContent/blockContent";
import ExternalLink from "../elements/externalLink";
import { media } from "../styled";
import firebase from "gatsby-plugin-firebase";

const StyledProject = styled.div`
  padding: 1rem;
  text-align: center;
  ${media.minLarge} {
    padding: 2.5rem 7rem;
  }
`;

const Project = ({ title, url, imageData, body }) => {
  firebase.analytics().logEvent(`Project: ${title}`);
  return (
    <StyledProject>
      <Title darkText>{title}</Title>
      <Image fluid={imageData} alt={title} />
      <BlockContent blocks={body} />
      <p>
        <ExternalLink colour={"link"} to={url}>
          View this project online &rarr;
        </ExternalLink>
      </p>
      <p>
        <InternalLink colour="light" to="/">
          &larr; back to all projects
        </InternalLink>
      </p>
    </StyledProject>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
  body: PropTypes.array.isRequired
};

export default Project;
