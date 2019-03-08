import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Button, Title } from 'rbx';
import BlockContent from '../elements/blockContent/blockContent';

const Project = ({ title, url, imageData, body }) => (
    <div className='project'>
        <Title>{title}</Title>
        <Image fluid={imageData} alt={title} />
        <BlockContent blocks={body} />
        <p>
            <Button as='a' color='link' href={url}>
                View this project online &rarr;
            </Button>
        </p>
        <p>
            <Button as={Link} color='light' to='/'>
                &larr; back to all projects
            </Button>
        </p>
    </div>
);

Project.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageData: PropTypes.object.isRequired,
    body: PropTypes.array.isRequired
};

export default Project;
