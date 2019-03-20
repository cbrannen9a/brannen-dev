import React from 'react';
import renderer from 'react-test-renderer';

import CodeBlock from './codeBlock';

const code =
    "import test from 'tester';\n\nconst thistest = () => {\n  return <div>testing</div>\n}";
const language = 'jsx';

describe('CodeBlock', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<CodeBlock language={language}>{code}</CodeBlock>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
