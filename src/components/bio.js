import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const Bio = ({ bio }) => {
	return (
		<div className='bio'>
			<BlockContent blocks={bio} />
		</div>);
};

export default Bio;