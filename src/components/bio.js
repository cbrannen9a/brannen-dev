import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const Bio = ({ bio }) => {
	return (<BlockContent blocks={bio} />);
};

export default Bio;