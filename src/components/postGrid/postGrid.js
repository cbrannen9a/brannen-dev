import React from "react";
import GridHeader from "../elements/gridHeader/gridHeader";
import PostGridView from "./postGridView";
import Grid from "../elements/grid";

const PostGrid = ({ posts, isMainPage }) => {
  return (
    <Grid>
      {isMainPage ? (
        <GridHeader
          title={"Posts"}
          link={"posts"}
          buttonColour={"link"}
          buttonTitle={"View All"}
        />
      ) : (
        <GridHeader
          title={"Posts"}
          link={"/"}
          buttonColour={"light"}
          buttonTitle={"Back"}
        />
      )}
      <PostGridView posts={isMainPage ? posts.slice(0, 3) : posts} />
    </Grid>
  );
};

export default PostGrid;
