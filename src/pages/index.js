import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/index.css';
import { Column } from 'rbx';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Welcome from '../components/welcome';
import ProjectGrid from '../components/projectGrid';

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
						id
						title
						_rawDescription
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
					_rawBio
				}
			}
		}
		allSanitySkills {
          edges{
            node{
              id
              title
              _rawDescription
            }
          }
        }
	}`);

	const projects = data.allSanityProject.edges;
	const author = data.allSanityAuthor.edges[0].node;
	const skills = data.allSanitySkills.edges;

	return (
		<Layout>
			<SEO title='Home' keywords={['gatsby', 'application', 'react']} />
			<Column.Group>
				<Column size='one-half'>
					<Welcome author={author} skills={skills} />
				</Column>
				<Column >
					<ProjectGrid projects={projects} />
				</Column>
			</Column.Group>
		</Layout>
	);
};

export default Home;
