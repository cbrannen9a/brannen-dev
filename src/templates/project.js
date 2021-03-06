import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout/layout';
import Project from '../components/project/project';

export const query = graphql`
    query($slug: String!) {
        sanityProject(slug: { current: { eq: $slug } }) {
            title
            description
            url
            _rawBody
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
    const body = project._rawBody;

    return (
        <Layout>
            <SEO title={title} keywords={['gatsby', 'application', 'react']} />
            <Project
                title={title}
                description={description}
                imageData={imageData}
                url={url}
                body={body}
            />
        </Layout>
    );
};

export default ProjectTemplate;
