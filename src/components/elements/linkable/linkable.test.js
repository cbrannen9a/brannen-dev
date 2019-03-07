import React from 'react';
import renderer from 'react-test-renderer';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Linkable from './linkable';

describe('Linkable', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<Linkable
				link={'testLink'}
				name={'linkable'}
				icon={faEnvelope} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});