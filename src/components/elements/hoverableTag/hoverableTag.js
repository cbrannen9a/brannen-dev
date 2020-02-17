import React from "react";
import PropTypes from "prop-types";

import BlockContent from "../blockContent/blockContent";
import ToolTip from "../toolTip/toolTip";
import styled from "styled-components";

const Tag = styled.div`
  margin-bottom: 0.5rem;
  align-items: center;
  background-color: #f9f5fb;
  border-radius: 0;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
`;

const HoverableTag = ({ title, description }) => (
  <div style={{ marginRight: "4px" }}>
    <ToolTip message={<BlockContent blocks={description} />}>
      <Tag>{title}</Tag>
    </ToolTip>
  </div>
);

HoverableTag.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired
};

export default HoverableTag;
