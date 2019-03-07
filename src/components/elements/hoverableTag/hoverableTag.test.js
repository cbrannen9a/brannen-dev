import React from 'react';
import renderer from 'react-test-renderer';

import HoverableTag from './hoverableTag';

const title = 'Test Tag';
const blocks = [{
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

describe('HoverableTag', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<HoverableTag title={title} description={blocks} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});