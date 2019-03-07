import React from 'react';
import Linkable from './elements/linkable';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const SocialLinks = ({ author }) => {
	return (<>
		<Linkable
			link={author.github}
			type='github'
			name='GitHub'
			icon={['fab', 'github']} />
		<Linkable
			link={author.twitter}
			type='twitter'
			name='Twitter'
			icon={['fab', 'twitter']} />
		<Linkable
			link={author.email}
			type='email'
			name='Email'
			icon={faEnvelope} />
	</>);
};

export default SocialLinks;