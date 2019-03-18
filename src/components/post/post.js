import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { Button, Title } from 'rbx';
import React from 'react';
import BlockContent from '../elements/blockContent/blockContent';

const Project = ({ title, description, imageData, body }) => (
    <div className='project'>
        <Title>{title}</Title>
        <p>{description}</p>
        <Image fluid={imageData} alt={title} />
        <BlockContent blocks={body} />
        <p>
            <Button as={Link} color='light' to='/'>
                &larr; back to all posts
            </Button>
        </p>
    </div>
);

Project.propTypes = {
    title: PropTypes.string.isRequired,

    imageData: PropTypes.object.isRequired,
    body: PropTypes.array.isRequired
};

export default Project;
