import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'rbx';
import Image from 'gatsby-image';

const ProjectPreview = ({ title, description, slug, imageData }) => (
	<div className='project-preview'>
		<Link to={`/${slug}/`}>
			<Image fluid={imageData} alt={title} />
		</Link>
		<h2>
			<Link to={`/${slug}/`}>{title}</Link>
		</h2>
		<p>{description}</p>
		<p>
			<Button as={Link} color='info' to={`/${slug}/`}>View</Button>
		</p>
	</div>
);

export default ProjectPreview;
