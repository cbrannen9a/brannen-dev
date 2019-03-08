import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import '../styles/404.css';
import Rocket from '../../assets/rocket.svg';

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<div className='bg-purple'>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			<div class='objects'>
				{/* <Rocket className='object_rocket' /> */}
				{/* <img className='object_rocket' alt='rocket' src='../../assets/rocket.svg' width='40px' /> */}
				<div className='earth-moon'>
					<img className='object_earth' alt='earth' src='http://salehriaz.com/404Page/img/earth.svg' width='100px' />
					<img className='object_moon' alt='moon' src='http://salehriaz.com/404Page/img/moon.svg' width='80px' />
				</div>
				<div className='box_astronaut'>
					<img className='object_astronaut' alt='astronaut' src='http://salehriaz.com/404Page/img/astronaut.svg' width='140px' />
				</div>
			</div>
			<div className='stars'>
				<div className='glowing_stars'>
					<div className='star' />
					<div className='star' />
					<div className='star' />
					<div className='star' />
					<div className='star' />
				</div>
			</div>
		</div>
	</Layout>
);

export default NotFoundPage;
