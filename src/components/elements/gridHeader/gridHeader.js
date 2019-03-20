import { Link } from 'gatsby';
import { Button, Title } from 'rbx';
import React from 'react';

const GridHeader = ({ title, link, buttonTitle, buttonColour }) => {
    return (
        <Title className='grid-header'>
            {title}
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

export default GridHeader;
