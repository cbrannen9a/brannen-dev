import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/index.css';
import { Container, Hero, Title, Column } from 'rbx';
import Layout from '../components/layout';
import ProjectPreview from '../components/projectPreview';
import Image from '../components/image';
import SEO from '../components/seo';

const Home = () => {
	const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

	const projects = data.allProjectsJson.edges;
	return (
		<Layout>
			<SEO title='Home' keywords={['gatsby', 'application', 'react']} />
			<Column.Group>
				<Column size='one-half'>
					<Hero color='primary' gradient>
						<Hero.Body>
							<Title>Chris Brannen</Title>
						</Hero.Body>
					</Hero>
				</Column>
				<Column>
					<Title>Projects</Title>
					{projects.map(({ node: project }) => {
						const title = project.title;
						const description = project.description;
						const slug = project.slug;
						const imageData = project.image.childImageSharp.fluid;

						return (
							<ProjectPreview
								key={title}
								title={title}
								description={description}
								slug={slug}
								imageData={imageData}
							/>
						);
					})}
				</Column>
			</Column.Group>
		</Layout>
	);
};

export default Home;
