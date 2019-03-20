import React from 'react';
import GridHeader from '../elements/gridHeader/gridHeader';
import PostGridView from './postGridView';

const PostGrid = ({ posts, isMainPage }) => {
    return (
        <div className='project-grid'>
            {isMainPage ? (
                <GridHeader
                    title={'Posts'}
                    link={'posts'}
                    buttonColour={'link'}
                    buttonTitle={'View All'}
                />
            ) : (
                <GridHeader
                    title={'Posts'}
                    link={'/'}
                    buttonColour={'light'}
                    buttonTitle={'Back'}
                />
            )}
            <PostGridView posts={isMainPage ? posts.slice(0, 3) : posts} />
        </div>
    );
};

export default PostGrid;
