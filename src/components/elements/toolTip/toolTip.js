import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledToolTip = styled.span`
  position: relative;
  cursor: pointer;
`;

const ToolTipBubble = styled.div`
  min-width: 200px;
  max-width: 300px;
  position: absolute;
  top: 22px;
  z-index: 10;
  ::after {
    content: "";
    position: absolute;
  }
`;

const ToolTipMessage = styled.div`
  background: white;
  border-radius: 3px;
  color: black;
  font-size: 0.75rem;
  line-height: 1.4;
  padding: 0.75em;
  text-align: left;
`;

const ToolTipTrigger = styled.span`
  display: inline-block;
`;

const ToolTip = ({ message, children }) => {
  const [display, setDisplay] = useState(false);
  return (
    <StyledToolTip onMouseLeave={() => setDisplay(false)}>
      {display && (
        <ToolTipBubble>
          <ToolTipMessage>{message}</ToolTipMessage>
        </ToolTipBubble>
      )}
      <ToolTipTrigger onMouseOver={() => setDisplay(true)}>
        {children}
      </ToolTipTrigger>
    </StyledToolTip>
  );
};

ToolTip.propTypes = {
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  children: PropTypes.element.isRequired
};

export default ToolTip;
