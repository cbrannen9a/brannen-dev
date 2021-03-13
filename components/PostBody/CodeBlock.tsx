import React, { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock: FC<Props> = ({ language = "javascript", children }) => <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;

interface Props {
  language: string;
}

export default CodeBlock;
