import PropTypes from "prop-types";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ language, children }) => {
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;
};

CodeBlock.defaultProps = {
  language: "javascript"
};

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string
};

export default CodeBlock;
