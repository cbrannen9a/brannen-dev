import React from 'react';
import PropTypes from 'prop-types';

import { Hero, Title } from 'rbx';
import Bio from '../bio/bio';
import Skills from '../skills/skills';
import SocialLinks from '../socialLinks/socialLinks';

const Welcome = ({ author, skills }) => {
	const reMappedSkills = skills.map(({ node: skill }) => {
		return {
			id: skill.id,
			title: skill.title,
			_rawDescription: skill._rawDescription
		};
	});

	return (
		<Hero color='primary' gradient>
			<Hero.Body>
				<Title>Hi <span role='img' aria-label='wave emoji'>👋</span></Title>
				<Title>I'm {author.name}</Title>
				<SocialLinks author={author} />
				<Bio bio={author._rawBio} />
				<Skills skills={reMappedSkills} />
			</Hero.Body>
		</Hero>
	);
};

Welcome.propTypes = {
	author: PropTypes.object.isRequired,
	skills: PropTypes.array.isRequired
};

export default Welcome;