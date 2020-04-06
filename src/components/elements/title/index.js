import React from "react";
import styled from "styled-components";
import { palette } from "../../styled/colour";

const StyledTitle = styled.h1`
  color: ${props =>
    props.darkText
      ? palette.primary.alternativeText
      : palette.primary.mainText};
  margin-bottom: 1rem;
  font-size: 28px;
  font-weight: 600;
  text-shadow: ${props => (props.darkText ? "" : `1px 2px 1px #3b1a57`)};
`;

const Title = ({ children, darkText }) => (
  <StyledTitle darkText={darkText}>{children}</StyledTitle>
);

export default Title;
