import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BlockContent from "../elements/blockContent/blockContent";

const StyledBio = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 2px 1px #3b1a57;
`;

const Bio = ({ bio }) => {
  return (
    <StyledBio>
      <BlockContent blocks={bio} />
    </StyledBio>
  );
};

Bio.propTypes = {
  bio: PropTypes.array.isRequired
};

export default Bio;
