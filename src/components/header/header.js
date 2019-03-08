import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Navbar } from 'rbx';

const Header = ({ siteTitle }) => (
    <Navbar>
        <Navbar.Brand>
            <Navbar.Item as='div'>
                <Link
                    to='/'
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}
                >
                    {siteTitle}
                </Link>
            </Navbar.Item>
        </Navbar.Brand>
    </Navbar>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

export default Header;
