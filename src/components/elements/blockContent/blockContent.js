import BlockContent from "@sanity/block-content-to-react";
import PropTypes from "prop-types";
import React from "react";
import CodeBlock from "../codeBlock/codeBlock";
import Figure from "../figure/figure";

const serializers = {
  types: {
    code: props => {
      const {
        node: { code, language }
      } = props;
      return <CodeBlock language={language}>{code}</CodeBlock>;
    },
    figure: props => {
      return <Figure {...props.node} />;
    }
  }
};

const Content = ({ blocks }) => (
  <BlockContent
    className="block-content"
    blocks={blocks}
    serializers={serializers}
  />
);

Content.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default Content;
