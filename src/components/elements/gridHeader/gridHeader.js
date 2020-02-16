import { Link } from "gatsby";

import React from "react";
import styled from "styled-components";

import { palette } from "../../styled";

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 28px;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  margin: 5px 10px;

  background-color: ${props => palette[props.buttonColour].main};
  border-color: transparent;
  color: ${props => palette[props.buttonColour].mainText} !important;
  border-width: 1px;
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

  :hover,
  :active,
  :focus {
    background-color: ${props => palette[props.buttonColour].alternative};
    color: ${props => palette[props.buttonColour].alternativeText} !important;
  }
`;

const GridHeader = ({ title, link, buttonTitle, buttonColour }) => {
  return (
    <Title>
      {title}
      <StyledLink to={`/${link}/`} buttonColour={buttonColour}>
        {buttonTitle}
      </StyledLink>
    </Title>
  );
};

export default GridHeader;
