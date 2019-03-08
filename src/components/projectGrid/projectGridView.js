import React from 'react';
import { Tile } from 'rbx';
import ProjectPreview from '../projectPreview/projectPreview';

const ProjectGrid = ({ projects }) => {
    return (
        <Tile kind='ancestor'>
            <Tile kind='parent' vertical>
                {projects.map(({ node: project }) => {
                    const title = project.title;
                    const description = project.description;
                    const slug = project.slug.current;
                    const imageData = project.mainImage.asset.fluid;
                    const skills = project.skills;

                    return (
                        <Tile kind='child' key={title}>
                            <ProjectPreview
                                title={title}
                                description={description}
                                slug={slug}
                                imageData={imageData}
                                skills={skills}
                            />
                        </Tile>
                    );
                })}
            </Tile>
        </Tile>
    );
};

export default ProjectGrid;
