import React from "react";
import Tile from "../elements/tile";
import Card from "../elements/card";
import ProjectPreview from "../projectPreview/projectPreview";

const ProjectGrid = ({ projects }) => {
  return (
    <Tile>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug.current;
        const imageData = project.mainImage.asset.fluid;
        const skills = project.skills;

        return (
          <Card key={title}>
            <ProjectPreview
              title={title}
              description={description}
              slug={slug}
              imageData={imageData}
              skills={skills}
            />
          </Card>
        );
      })}
    </Tile>
  );
};

export default ProjectGrid;
