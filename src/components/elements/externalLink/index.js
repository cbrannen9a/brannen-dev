import React from "react";
import styled from "styled-components";

import { palette } from "../../styled";

const StyledLink = styled.a`
  margin: 5px 10px;
  ${props => (props.rounded ? `border-radius: 290486px;` : ``)}
  background-color: ${props => palette[props.colour].main};
  border-color: transparent;
  color: ${props => palette[props.colour].mainText} !important;
  border-width: 1px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: center;

  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: calc(0.375em - 1px);
  padding-top: calc(0.375em - 1px);

  text-align: center;
  white-space: nowrap;
  height: 1.75rem;
  line-height: 1.75rem;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  text-decoration: none;

  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2), 2px 6px 5px rgba(0, 0, 0, 0.19),
    -1px -2px 0px #dfd4e9;

  :hover,
  :active,
  :focus {
    background-color: ${props => palette[props.colour].alternative};
    color: ${props => palette[props.colour].alternativeText} !important;
  }
`;

const ExternalLink = ({ children, colour, to, rounded = false }) => (
  <StyledLink colour={colour} href={to} rounded={rounded}>
    {children}
  </StyledLink>
);

export default ExternalLink;
