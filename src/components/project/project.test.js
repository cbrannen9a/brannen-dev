import React from 'react';
import renderer from 'react-test-renderer';

import Project from './project';

const mock = {
    title: 'Test Project',
    url: 'testurl',
    imageData: {
        aspectRatio: 1.5,
        src: 'test_image.jpg',
        srcSet: 'some srcSet',
        srcSetWebp: 'some srcSetWebp',
        sizes: '(max-width: 600px) 100vw, 600px',
        base64: 'string_of_base64'
    },
    body: []
};

describe('Project', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Project {...mock} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
