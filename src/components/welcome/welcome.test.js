import React from 'react';
import renderer from 'react-test-renderer';
//Add icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Welcome from './welcome';
library.add(fab);

const author = {
	name: 'tester',
	github: 'gitHub', twitter: 'twitter', email: 'email',
	_rawBio: [{
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
};

const skills = [{
	node: {
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
	}
},
{
	node: {
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
	}
}];

describe('Welcome', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<Welcome author={author} skills={skills} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});