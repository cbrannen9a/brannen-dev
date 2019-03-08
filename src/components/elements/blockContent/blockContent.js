import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

const Content = ({ blocks }) => <BlockContent blocks={blocks} />;

Content.propTypes = {
    blocks: PropTypes.array.isRequired
};

export default Content;
