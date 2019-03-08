import React from 'react';
import { Link } from 'gatsby';
import { Button, Hero, Title } from 'rbx';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import '../styles/404.css';
import Rocket from '../../assets/rocket.svg';
import Earth from '../../assets/earth.svg';
import Moon from '../../assets/moon.svg';

const NotFoundPage = () => (
    <Layout>
        <SEO title='404: Not found' />
        <Hero style={{ height: '100vh' }} color='primary' gradient>
            <Hero.Body>
                <Title>Lost in space</Title>
                <Title subtitle>
                    Oh no! Unable to find that planet...
                    <Button
                        rounded
                        style={{ marginLeft: '5px' }}
                        size='small'
                        as={Link}
                        color='link'
                        to={'/'}
                    >
                        Head Home
                    </Button>
                </Title>
                <div className='objects'>
                    <Rocket className='rocket' />
                    <Earth className='earth' />
                    <Moon className='moon' />
                </div>
                <div className='stars'>
                    <div className='glowing_stars'>
                        <div className='star' />
                        <div className='star' />
                        <div className='star' />
                        <div className='star' />
                        <div className='star' />
                        <div className='star' />
                        <div className='star' />
                    </div>
                </div>
            </Hero.Body>
        </Hero>
    </Layout>
);

export default NotFoundPage;
