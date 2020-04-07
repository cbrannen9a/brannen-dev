import React from "react";
import styled from "styled-components";
import InternalLink from "../internalLink";

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;

  margin: 5px;

  color: #632c92;
`;

const Wrapper = styled.div`
  margin: auto;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 290486px;

  box-shadow: 2px 5px 5px #969699, -1px -2px 2px #dddcde;
`;

const GridHeader = ({ title, link, buttonTitle, buttonColour }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <InternalLink to={`/${link}/`} colour={buttonColour}>
        {buttonTitle}
      </InternalLink>
    </Wrapper>
  );
};

export default GridHeader;
