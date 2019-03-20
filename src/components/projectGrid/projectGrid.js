import React from 'react';
import GridHeader from '../elements/gridHeader/gridHeader';
import ProjectGridView from './projectGridView';

const ProjectGrid = ({ projects, isMainPage }) => {
    return (
        <div className='project-grid'>
            {isMainPage ? (
                <GridHeader
                    title={'Projects'}
                    link={'projects'}
                    buttonColour={'link'}
                    buttonTitle={'View All'}
                />
            ) : (
                <GridHeader
                    title={'Projects'}
                    link={'/'}
                    buttonColour={'light'}
                    buttonTitle={'Back'}
                />
            )}
            <ProjectGridView projects={projects} />
        </div>
    );
};

export default ProjectGrid;
