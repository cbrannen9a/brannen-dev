import React from 'react';
import { Tag } from 'rbx';
import HoverableTag from './elements/hoverableTag';

const Skills = ({ skills }) => (
	<Tag.Group>
		{skills && skills.map(s =>
			<HoverableTag
				key={s.id}
				title={s.title}
				description={s._rawDescription} />
		)}
	</Tag.Group>
);

export default Skills;