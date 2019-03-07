import React from 'react';
import BlockContent from './elements/blockContent';

const Bio = ({ bio }) => {
	return (
		<div className='bio'>
			<BlockContent blocks={bio} />
		</div>);
};

export default Bio;