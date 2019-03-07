import React from 'react';
import PropTypes from 'prop-types';

import BlockContent from '../elements/blockContent/blockContent';

const Bio = ({ bio }) => {
	return (
		<div className='bio'>
			<BlockContent blocks={bio} />
		</div>);
};

Bio.propTypes = {
	bio: PropTypes.array.isRequired
};

export default Bio;