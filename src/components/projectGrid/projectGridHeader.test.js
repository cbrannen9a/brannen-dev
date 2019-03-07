import React from 'react';
import renderer from 'react-test-renderer';

import ProjectGridHeader from './projectGridHeader';

describe('ProjectGridHeader', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<ProjectGridHeader link={'test'} buttonColour={'link'} buttonTitle={'test'} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});