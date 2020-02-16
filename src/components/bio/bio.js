import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BlockContent from "../elements/blockContent/blockContent";

const StyledBio = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
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
