import React from 'react';
import PropTypes from 'prop-types';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Linkable from '../elements/linkable/linkable';

const SocialLinks = ({ author }) => {
	return (<>
		<Linkable
			link={author.github}
			name='GitHub'
			icon={['fab', 'github']} />
		<Linkable
			link={author.twitter}
			name='Twitter'
			icon={['fab', 'twitter']} />
		<Linkable
			link={author.email}
			name='Email'
			icon={faEnvelope} />
	</>);
};

SocialLinks.propTypes = {
	author: PropTypes.object.isRequired
};

export default SocialLinks;