import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  flex: 1 1 50%;
  max-width: calc(80% - 0.5rem);
  margin-bottom: 2rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.295);
  border-radius: 3px;
  padding: 10px;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

export default Card;
