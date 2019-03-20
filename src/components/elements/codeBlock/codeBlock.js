import Prism from 'prismjs';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';

const CodeBlock = ({ language, children }) => {
    useEffect(() => {
        Prism.highlightAll();
    });
    //jsx not rendering correctly just using javascript [20/3/19]
    language = language === 'jsx' ? 'javascript' : language;
    return (
        <pre className={`language-${language}`}>
            <code className={`language-${language}`}>{children}</code>
        </pre>
    );
};

CodeBlock.defaultProps = {
    language: 'javascript'
};

CodeBlock.propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string
};

export default CodeBlock;
