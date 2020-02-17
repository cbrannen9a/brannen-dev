import React from "react";
import PostPreview from "../postPreview/postPreview";
import Card from "../elements/card";
import Tile from "../elements/tile";

const PostGrid = ({ posts }) => {
  return (
    <Tile>
      {posts.map(post => {
        return (
          <Card key={post.id}>
            <PostPreview {...post} />
          </Card>
        );
      })}
    </Tile>
  );
};

export default PostGrid;
