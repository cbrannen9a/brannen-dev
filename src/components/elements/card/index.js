import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  flex: 1 1 50%;
  max-width: calc(80% - 0.5rem);
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 3px;
  padding: 10px;
  align-self: center;

  box-shadow: 2px 5px 5px #969699, -1px -2px 2px #dddcde;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

export default Card;
