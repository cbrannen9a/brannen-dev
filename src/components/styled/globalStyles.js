import React from "react";
import { createGlobalStyle } from "styled-components";
import { colour } from "./colour";
import { font } from "./typography";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Muli", "Helvetica Neue", Arial, sans-serif, -apple-system, BlinkMacSystemFont;
    font-size: ${font.baseSize};
    line-height: ${font.baseLineHeight};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${colour.white};
    color: ${colour.black};
    margin: 0;
    padding: 0;
  }

  html,
  body,
  body > div,
  body > div > div {
    height: 100%;
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
);
