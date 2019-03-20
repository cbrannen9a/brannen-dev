import React from 'react';
import renderer from 'react-test-renderer';

import ToolTip from './toolTip';

const message = 'Test Tooltip';

describe('ToolTip', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <ToolTip message={message}>
                    <div>Child</div>
                </ToolTip>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
