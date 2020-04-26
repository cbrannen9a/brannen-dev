import React from "react";
import Tile from "../elements/tile";
import Card from "../elements/card";
import ProjectPreview from "../projectPreview/projectPreview";

const ProjectGrid = ({ projects }) => {
  return (
    <Tile>
      {projects.map((project) => {
        return (
          <Card key={project.title}>
            <ProjectPreview {...project} />
          </Card>
        );
      })}
    </Tile>
  );
};

export default ProjectGrid;
