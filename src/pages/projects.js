import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import ProjectGrid from '../components/projectGrid/projectGrid';

const Projects = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityProject(sort: { fields: [publishedAt], order: DESC }) {
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
        }
    `);

    const projects = data.allSanityProject.edges;

    return (
        <Layout>
            <SEO
                title='Projects'
                keywords={['gatsby', 'application', 'react']}
            />
            <ProjectGrid projects={projects} />
        </Layout>
    );
};

export default Projects;
