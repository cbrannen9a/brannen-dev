import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Button } from 'rbx';
import BlockContent from './elements/blockContent';

const Project = ({ title, url, imageData, body }) => (
	<div className='project'>
		<h1>{title}</h1>
		<Image fluid={imageData} alt={title} />
		<BlockContent blocks={body} />
		<p>
			<Button as='a' color='link' href={url}>View this project online &rarr;</Button>
		</p>
		<p>
			<Button as={Link} color='light' to='/'>&larr; back to all projects</Button>
		</p>
	</div>
);

export default Project;