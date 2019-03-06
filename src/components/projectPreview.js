import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'rbx';
import Image from 'gatsby-image';
import Skills from './skills';

const ProjectPreview = ({ title, description, slug, imageData, skills }) => (
	<div className='project-preview'>
		<Link to={`/${slug}/`}>
			<Image fluid={imageData} alt={title} />
		</Link>
		<h2>
			<Link to={`/${slug}/`}>{title}</Link>

		</h2>
		<Button as={Link} color='info' to={`/${slug}/`}>View</Button>
		<p>{description}</p>
		<Skills skills={skills} />
	</div>
);

export default ProjectPreview;