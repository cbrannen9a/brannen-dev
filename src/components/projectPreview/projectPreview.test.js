import React from 'react';
import renderer from 'react-test-renderer';

import ProjectPreview from './projectPreview';

const mock = {
    title: 'Test Project',
    slug: 'testslug',
    imageData: {
        aspectRatio: 1.5,
        src: 'test_image.jpg',
        srcSet: 'some srcSet',
        srcSetWebp: 'some srcSetWebp',
        sizes: '(max-width: 600px) 100vw, 600px',
        base64: 'string_of_base64'
    },
    description: 'test description',
    skills: [
        {
            id: 'skill1',
            title: 'isSkill1',
            _rawDescription: [
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
            ]
        },
        {
            id: 'skill2',
            title: 'isSkill2',
            _rawDescription: [
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
            ]
        }
    ]
};

describe('ProjectPreview', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ProjectPreview {...mock} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
