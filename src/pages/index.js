import React from 'react';

import '../styles/index.css';
import { Container, Hero, Title } from 'rbx';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' keywords={['gatsby', 'application', 'react']} />
		<Hero color='primary' gradient>
			<Hero.Body>
				<Container>
					<Title>Brannen.dev</Title>
					<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
						<Image />
					</div>
				</Container>
			</Hero.Body>
		</Hero>
	</Layout>
);

export default IndexPage;
