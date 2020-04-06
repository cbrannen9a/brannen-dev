import React from "react";
import PropTypes from "prop-types";

import BlockContent from "../blockContent/blockContent";
import ToolTip from "../toolTip/toolTip";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 4px;
`;

const BaseHoverableTag = ({ description, children }) => (
  <Wrapper>
    <ToolTip message={<BlockContent blocks={description} />}>
      {children}
    </ToolTip>
  </Wrapper>
);

BaseHoverableTag.propTypes = {
  description: PropTypes.array.isRequired
};

export default BaseHoverableTag;
