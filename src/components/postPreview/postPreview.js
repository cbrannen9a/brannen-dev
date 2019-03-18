import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { Button } from 'rbx';
import React from 'react';

const PostPreview = ({ source, title, description, slug, imageData }) => {
    switch (source) {
        case 'medium':
            return (
                <div className='post-preview'>
                    <a href={slug}>
                        <img src={imageData} alt={title} width='150' />
                    </a>
                    <h2>
                        <a href={slug}>{title}</a>
                    </h2>
                    <Button as='a' color='link' href={slug}>
                        <FontAwesomeIcon
                            style={{ marginRight: '3px' }}
                            icon={faEye}
                        />
                        View on Medium
                    </Button>
                    <p>{description}</p>
                </div>
            );
        case 'sanity':
            return (
                <div className='post-preview'>
                    <Link to={slug}>
                        <Image
                            fluid={imageData}
                            alt={title}
                            style={{ width: '150px', margin: 'auto' }}
                        />
                    </Link>
                    <h2>
                        <Link to={slug}>{title}</Link>
                    </h2>
                    <Button as={Link} color='link' to={slug}>
                        <FontAwesomeIcon
                            style={{ marginRight: '3px' }}
                            icon={faEye}
                        />
                        View
                    </Button>
                    <p>{description}</p>
                </div>
            );
        default:
            return null;
    }
};

PostPreview.propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    imageData: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
        .isRequired,
    description: PropTypes.string.isRequired
};

export default PostPreview;
