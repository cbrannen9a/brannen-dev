import React from 'react';
import renderer from 'react-test-renderer';

import Bio from './bio';
const bio = [{
	style: 'normal', _key: 'block1', _type: 'block', markDefs: [],
	children: [
		{
			marks: [],
			text: 'test text',
			_key: 'mock1',
			_type: 'span'
		},
		{
			marks: ['strong'],
			text: 'test bold',
			_key: 'mock2',
			_type: 'span'
		},
		{
			marks: ['em'],
			text: 'test italic',
			_key: 'mock3',
			_type: 'span'
		}]
}];

describe('Bio', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<Bio bio={bio} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});