import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const Content = ({ blocks }) => (
	<BlockContent blocks={blocks} />
);

export default Content;