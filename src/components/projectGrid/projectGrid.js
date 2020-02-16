import React from "react";
import GridHeader from "../elements/gridHeader/gridHeader";
import ProjectGridView from "./projectGridView";
import Grid from "../elements/grid";

const ProjectGrid = ({ projects, isMainPage }) => {
  return (
    <Grid>
      {isMainPage ? (
        <GridHeader
          title={"Projects"}
          link={"projects"}
          buttonColour={"link"}
          buttonTitle={"View All"}
        />
      ) : (
        <GridHeader
          title={"Projects"}
          link={"/"}
          buttonColour={"light"}
          buttonTitle={"Back"}
        />
      )}
      <ProjectGridView projects={projects} />
    </Grid>
  );
};

export default ProjectGrid;
