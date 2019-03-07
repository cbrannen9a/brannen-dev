import React from 'react';
import renderer from 'react-test-renderer';

import Skills from './skills';

const skills = [{
	id: 'skill1', title: 'isSkill1', _rawDescription: [{
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
	}]
},
{
	id: 'skill2', title: 'isSkill2', _rawDescription: [{
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
	}]
}];

describe('Skills', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<Skills skills={skills} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});