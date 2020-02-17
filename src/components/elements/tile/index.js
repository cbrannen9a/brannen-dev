import React from "react";
import styled from "styled-components";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tile = ({ children }) => <StyledTile>{children}</StyledTile>;

export default Tile;
