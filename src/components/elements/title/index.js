import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 28px;
  font-weight: 600;
`;

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
