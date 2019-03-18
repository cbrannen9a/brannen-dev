import React from 'react';
import renderer from 'react-test-renderer';
import GridHeader from './gridHeader';

describe('GridHeader', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <GridHeader
                    title={'Test'}
                    link={'test'}
                    buttonColour={'link'}
                    buttonTitle={'test'}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
