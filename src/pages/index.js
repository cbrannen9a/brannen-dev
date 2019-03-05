import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/index.css';
import { Hero, Title, Column } from 'rbx';
import Layout from '../components/layout';
import ProjectPreview from '../components/projectPreview';
import SEO from '../components/seo';

const Home = () => {
	const data = useStaticQuery(graphql`
	    {
		allSanityProject(
			sort: {
			fields: [publishedAt]
			order: DESC
			}
		) {
			edges {
				node {
					title
					slug {
						current
					}
					description
					url  
					skills {
						title
					}
					mainImage {
						asset {
							fluid {
							...GatsbySanityImageFluid
							}
						}
					}
				}
			}
		}
		allSanityAuthor {
			edges {
				node {
					name
				}
			}
		}
	}`);

	//console.log(data);
	const projects = data.allSanityProject.edges;
	const author = data.allSanityAuthor.edges[0].node.name;
	return (
		<Layout>
			<SEO title='Home' keywords={['gatsby', 'application', 'react']} />
			<Column.Group>
				<Column size='one-half'>
					<Hero color='primary' gradient>
						<Hero.Body>
							<Title>Hi <span role='img' aria-label='wave emoji'>👋</span></Title>
							<Title>I'm {author}</Title>
						</Hero.Body>
					</Hero>
				</Column>
				<Column>
					<Title>Projects</Title>
					{projects.map(({ node: project }) => {
						const title = project.title;
						const description = project.description;
						const slug = project.slug.current;
						const imageData = project.mainImage.asset.fluid;

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
