import React from 'react';
import renderer from 'react-test-renderer';
//Add icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SocialLinks from './socialLinks';

library.add(fab);

const author = { github: 'gitHub', twitter: 'twitter', email: 'email' };
describe('SocialLinks', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<SocialLinks author={author} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});