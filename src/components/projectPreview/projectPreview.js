import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { Button } from 'rbx';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Skills from '../skills/skills';

const ProjectPreview = ({ title, description, slug, imageData, skills }) => (
	<div className='project-preview'>
		<Link to={`/${slug}/`}>
			<Image fluid={imageData} alt={title} />
		</Link>
		<h2>
			<Link to={`/${slug}/`}>{title}</Link>

		</h2>
		<Button
			as={Link}
			color='link'
			to={`/${slug}/`}>
			<FontAwesomeIcon
				style={{ marginRight: '3px' }}
				icon={faEye} />
			View
		</Button>
		<p>{description}</p>
		<Skills skills={skills} />
	</div>
);

ProjectPreview.propTypes = {
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	imageData: PropTypes.object.isRequired,
	description: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired
};

export default ProjectPreview;
