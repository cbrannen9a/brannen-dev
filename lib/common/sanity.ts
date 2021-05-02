export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
};

const commonFields = `
  _id,
  _type,
  name,
  title,
  description,
  mainImage,
  "slug": slug.current,
`;

const postFields = `
  publishedAt,
  ${commonFields}
`;

const projectFields = `
  "skills":skills[]->,
  ${commonFields}
`;

export const indexQuery = `
{
  "siteSettings":*[_type == "siteSettings" && _id == "siteSettings"] {
    ...
  }, 
  "homePage":*[_type =="page" && title == "Home"]|[0] {
    ...
  },
  "allPosts": *[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc, _updatedAt desc) {
    ${postFields}
  },
  "allProjects":*[_type == "project" && !(_id in path('drafts.**'))] | order(publishedAt desc, _updatedAt desc) {
    ${projectFields}
  },
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    "body":body[]{
      ...,
     asset->
    },
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    body,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
