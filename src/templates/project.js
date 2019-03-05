import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
	  title  
	  description
	  url    
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;
	const title = project.title;
	const description = project.description;
	const imageData = project.mainImage.asset.fluid;
	const url = project.url;

	return (
		<Layout>
			<Project
				title={title}
				description={description}
				imageData={imageData}
				url={url}
			/>
		</Layout>
	);
};

export default ProjectTemplate;
