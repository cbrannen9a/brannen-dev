import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HoverableTag from "../elements/hoverableTag/hoverableTag";

const Tags = styled.div`
  margin-top: 5px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Skills = ({ skills }) => (
  <Tags>
    {skills &&
      skills.map(s => (
        <HoverableTag
          key={s.id}
          title={s.title}
          description={s._rawDescription}
        />
      ))}
  </Tags>
);

Skills.propTypes = {
  skills: PropTypes.array
};

export default Skills;
