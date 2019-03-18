export const postResolver = posts => {
    let result = [];
    for (let post in posts) {
        if (posts.hasOwnProperty(post)) {
            posts[post].forEach(p => {
                result.push(normalisePost(p, post));
            });
        }
    }

    return result.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
};

const mediumCDNUrl = 'https://cdn-images-1.medium.com/max/150/';
const mediumLinkUrl = 'https://medium.com/@cbrannen/';

const normalisePost = (sourcePost, source) => {
    let post = {};

    switch (source) {
        case 'medium':
            post.source = source;
            post.id = sourcePost.node.id;
            post.title = sourcePost.node.title;
            post.slug = `${mediumLinkUrl}${sourcePost.node.uniqueSlug}`;
            post.imageData = `${mediumCDNUrl}/${
                sourcePost.node.virtuals.previewImage.imageId
            }`;
            post.description = sourcePost.node.virtuals.subtitle;
            post.createdAt = sourcePost.node.createdAt;
            break;

        case 'sanity':
            post.source = source;
            post.id = sourcePost.node.id;
            post.title = sourcePost.node.title;
            post.slug = `/${sourcePost.node.slug.current}/`;
            post.description = sourcePost.node.description;
            post.imageData = sourcePost.node.mainImage.asset.fluid;
            post.body = sourcePost.node._rawBody;
            post.createdAt = sourcePost.node.publishedAt;
            break;
        default:
            break;
    }

    return post;
};
