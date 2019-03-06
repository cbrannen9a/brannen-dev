import React from 'react';
import { Hero, Title } from 'rbx';
import Bio from './bio';
import Skills from './skills';
import Links from './links';

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
				<Links author={author} />
				<Bio bio={author._rawBio} />
				<Skills skills={reMappedSkills} />
			</Hero.Body>
		</Hero>
	);
};

export default Welcome;