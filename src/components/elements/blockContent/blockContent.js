import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import React from "react";
import CodeBlock from "../codeBlock/codeBlock";
import Figure from "../figure/figure";
import styled from "styled-components";

const StyledBlockContent = styled(BlockContent)`
  text-align: left;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.5rem;
    font-weight: bold;
    font-size: 1.25rem;
  }

  figure {
    text-align: center;
  }

  code {
    color: black;
  }
`;

const serializers = {
  types: {
    code: props => {
      const {
        node: { code, language }
      } = props;
      return <CodeBlock language={language}>{code}</CodeBlock>;
    },
    figure: props => {
      return <Figure {...props} />;
    }
  }
};

const Content = ({ blocks }) => (
  <StyledBlockContent blocks={blocks} serializers={serializers} />
);

Content.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default Content;
