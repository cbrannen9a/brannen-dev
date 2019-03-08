import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rbx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Linkable = ({ link, name, icon }) => {
    return (
        <Button
            style={{ margin: '0px 5px 5px 5px' }}
            as='a'
            color='light'
            href={link}
            rounded
        >
            <FontAwesomeIcon style={{ marginRight: '3px' }} icon={icon} />
            {name}
        </Button>
    );
};

Linkable.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Linkable;
