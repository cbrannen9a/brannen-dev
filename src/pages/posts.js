import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/layout';
import PostGrid from '../components/postGrid/postGrid';
import SEO from '../components/seo';
import { postResolver } from '../utils/postResolver';

const Posts = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityPost(sort: { fields: [_createdAt], order: DESC }) {
                edges {
                    node {
                        _createdAt
                        title
                        _rawBody
                        slug {
                            current
                        }
                        id
                        mainImage {
                            asset {
                                fluid(maxWidth: 150) {
                                    ...GatsbySanityImageFluid
                                }
                            }
                        }
                    }
                }
            }
            allMediumPost(sort: { fields: [createdAt], order: DESC }) {
                edges {
                    node {
                        createdAt
                        id
                        title
                        uniqueSlug
                        virtuals {
                            subtitle
                            previewImage {
                                imageId
                            }
                        }
                        author {
                            name
                        }
                    }
                }
            }
        }
    `);

    const posts = postResolver({
        medium: data.allMediumPost.edges,
        sanity: data.allSanityPost.edges
    });
    return (
        <Layout>
            <SEO title='Posts' keywords={['gatsby', 'application', 'react']} />
            <PostGrid posts={posts} />
        </Layout>
    );
};

export default Posts;
