import React from 'react';
import renderer from 'react-test-renderer';

import BlockContent from './blockContent';

const blocks = [
    {
        style: 'normal',
        _key: 'block1',
        _type: 'block',
        markDefs: [],
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
            }
        ]
    }
];

const codeBlock = [
    {
        _key: 'c263f54ec9f9',
        _type: 'block',
        children: [
            {
                _key: 'c263f54ec9f90',
                _type: 'span',
                marks: ['em'],
                text: 'I would reccommend to have a look at the '
            },
            {
                _key: 'c263f54ec9f91',
                _type: 'span',
                marks: ['em', '46e387fb630e'],
                text: 'Gatsby docs'
            },
            {
                _key: 'c263f54ec9f92',
                _type: 'span',
                marks: ['em'],
                text:
                    ' and a little play with a starter project first. Also I got alot of guidance for creating the portfolio site from this '
            },
            {
                _key: 'c263f54ec9f93',
                _type: 'span',
                marks: ['em', '145eb0b0dd3e'],
                text: 'video'
            },
            {
                _key: 'c263f54ec9f94',
                _type: 'span',
                marks: ['em'],
                text: '.'
            }
        ],
        markDefs: [
            {
                _key: '46e387fb630e',
                _type: 'link',
                href: 'https://www.gatsbyjs.org/'
            },
            {
                _key: '145eb0b0dd3e',
                _type: 'link',
                href: 'https://youtu.be/SLGkyodumKI'
            }
        ],
        style: 'normal'
    },
    {
        _key: '6cf227bc999b',
        _type: 'code',
        code:
            "import test from 'tester';\n\nconst thistest = () => {\n  return <div>testing</div>\n}",
        language: 'jsx'
    },
    {
        _key: 'e4d21c385c04',
        _type: 'block',
        children: [
            {
                _key: 'e4d21c385c040',
                _type: 'span',
                marks: [],
                text: ''
            }
        ],
        markDefs: [],
        style: 'normal'
    }
];

describe('BlockContent', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<BlockContent blocks={blocks} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders code correctly', () => {
        const tree = renderer
            .create(<BlockContent blocks={codeBlock} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
