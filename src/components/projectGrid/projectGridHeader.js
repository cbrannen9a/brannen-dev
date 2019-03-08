import React from 'react';
import { Link } from 'gatsby';
import { Button, Title } from 'rbx';

const ProjectGrid = ({ link, buttonTitle, buttonColour }) => {
    return (
        <Title className='project-grid-header'>
            Projects
            <Button
                style={{ marginLeft: '10px' }}
                as={Link}
                color={buttonColour}
                to={`/${link}/`}
            >
                {buttonTitle}
            </Button>
        </Title>
    );
};

export default ProjectGrid;
