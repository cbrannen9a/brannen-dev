import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from 'rbx';
import HoverableTag from '../elements/hoverableTag/hoverableTag';

const Skills = ({ skills }) => (
    <Tag.Group style={{ marginTop: '5px' }}>
        {skills &&
            skills.map(s => (
                <HoverableTag
                    key={s.id}
                    title={s.title}
                    description={s._rawDescription}
                />
            ))}
    </Tag.Group>
);

Skills.propTypes = {
    skills: PropTypes.array
};

export default Skills;
