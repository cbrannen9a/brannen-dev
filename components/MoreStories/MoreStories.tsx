import { FC } from "react";
import PostPreview from "../PostPreview";

const MoreStories: FC<Props> = ({ posts }) => (
  <section>
    <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
      Posts
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.mainImage}
          date={post.publishedAt}
          slug={post.slug}
          excerpt={post.description}
        />
      ))}
    </div>
  </section>
);

interface Props {
  posts: {
    slug: string;
    title: string;
    mainImage: any;
    publishedAt: string;
    description: string;
  }[];
}

export default MoreStories;
