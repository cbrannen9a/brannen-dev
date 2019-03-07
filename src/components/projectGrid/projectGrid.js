import React from 'react';
import { Title } from 'rbx';
import ProjectPreview from '../projectPreview/projectPreview';

const ProjectGrid = ({ projects }) => {
	return (
		<div className='project-grid'>
			<Title className='project-grid-header'>Projects</Title>
			{
				projects.map(({ node: project }) => {
					const title = project.title;
					const description = project.description;
					const slug = project.slug.current;
					const imageData = project.mainImage.asset.fluid;
					const skills = project.skills;

					return (
						<ProjectPreview
							key={title}
							title={title}
							description={description}
							slug={slug}
							imageData={imageData}
							skills={skills}
						/>
					);
				})
			}
		</div>);
};

export default ProjectGrid;