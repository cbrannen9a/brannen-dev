import BlockContent from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';
import React from 'react';
import CodeBlock from '../codeBlock/codeBlock';

const serializers = {
    types: {
        code: props => {
            const {
                node: { code, language }
            } = props;
            return <CodeBlock language={language}>{code}</CodeBlock>;
        }
    }
};

const Content = ({ blocks }) => (
    <BlockContent blocks={blocks} serializers={serializers} />
);

Content.propTypes = {
    blocks: PropTypes.array.isRequired
};

export default Content;
