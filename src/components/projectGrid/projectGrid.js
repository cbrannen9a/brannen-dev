import React from 'react';

import ProjectGridHeader from './projectGridHeader';
import ProjectGridView from './projectGridView';

const ProjectGrid = ({ projects, isMainPage }) => {
	return (
		<div className='project-grid'>
			{isMainPage
				? <ProjectGridHeader
					link={'projects'}
					buttonColour={'link'}
					buttonTitle={'View All'} />
				: <ProjectGridHeader
					link={'/'}
					buttonColour={'light'}
					buttonTitle={'Back'} />}
			<ProjectGridView projects={projects} />
		</div>);
};

export default ProjectGrid;