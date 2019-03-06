import React from 'react';
import { Button } from 'rbx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Linkable = ({ link, type, name, icon }) => {
	return (
		<Button
			style={{ margin: '0px 5px 5px 5px' }}
			as='a'
			color='light'
			href={link}
			rounded>
			<FontAwesomeIcon
				style={{ marginRight: '3px' }}
				icon={icon} />
			{name}
		</Button>
	);
};

export default Linkable;