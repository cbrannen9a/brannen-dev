import { Tile } from 'rbx';
import React from 'react';
import PostPreview from '../postPreview/postPreview';

const PostGrid = ({ posts }) => {
    return (
        <Tile kind='ancestor'>
            <Tile kind='parent' vertical>
                {posts.map(post => {
                    return (
                        <Tile kind='child' key={post.id}>
                            <PostPreview {...post} />
                        </Tile>
                    );
                })}
            </Tile>
        </Tile>
    );
};

export default PostGrid;
