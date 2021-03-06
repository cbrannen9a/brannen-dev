import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../elements/title";
import Bio from "../bio/bio";
import Skills from "../skills/skills";
import SocialLinks from "../socialLinks/socialLinks";

const Hero = styled.div`
  background-image: linear-gradient(141deg, #632c92, #8e44ad 71%, #b14ac0);
  color: white;
  padding: 3rem 1.5rem;
  flex-grow: 1;
  flex-shrink: 0;
`;

const Welcome = ({ author, skills }) => {
  return (
    <Hero color="primary" gradient>
      <Title>
        Hi{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </Title>
      <Title>I'm {author.name}</Title>
      <SocialLinks author={author} />
      <Bio bio={author._rawBio} />
      <Skills skills={skills} />
    </Hero>
  );
};

Welcome.propTypes = {
  author: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
};

export default Welcome;
