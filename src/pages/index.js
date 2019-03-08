import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/index.css';

import { Column } from 'rbx';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Welcome from '../components/welcome/welcome';
import ProjectGrid from '../components/projectGrid/projectGrid';

const Home = () => {
	const data = useStaticQuery(graphql`
	    {
		allSanityProject(
			sort: {
			fields: [publishedAt]
			order: DESC
			}
			limit: 3
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
		sanityAuthor(name:{eq: "Chris Brannen"}){
    		name
   			 _rawBio
			twitter
			github
			email
  		}
		allSanitySkills(
    sort: {
      fields: [group, subGroup, order]
      order: ASC
    }
  )  {
          edges{
            node{
              id
              title
			  _rawDescription
			  group
			  subGroup
			  order
            }
          }
        }
	}`);

	const projects = data.allSanityProject.edges;
	const author = data.sanityAuthor;
	const skills = data.allSanitySkills.edges;

	return (
		<Layout>
			<SEO title='Home' keywords={['gatsby', 'application', 'react']} />
			<Column.Group>
				<Column size='one-half'>
					<Welcome author={author} skills={skills} />
				</Column>
				<Column >
					<ProjectGrid projects={projects} isMainPage={true} />
				</Column>
			</Column.Group>
		</Layout>
	);
};

export default Home;
