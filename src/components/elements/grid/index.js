import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px;
  padding: 8px;
  text-align: center;
`;

const Grid = ({ children }) => <StyledGrid>{children}</StyledGrid>;

export default Grid;
