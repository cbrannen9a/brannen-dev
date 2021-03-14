import { ContentItem } from "@/types";
import ContentPreviewItem from "components/ContentPreviewItem";
import { FC } from "react";

const ContentPreview: FC<Props> = ({ content, title }) => (
  <section>
    <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
      {content.map((post) => (
        <ContentPreviewItem
          key={post.slug}
          title={post.title}
          mainImage={post.mainImage}
          publishedAt={post._type === "post" ? post.publishedAt : ""}
          slug={post.slug}
          description={post.description}
          skills={post._type === "project" ? post.skills : []}
        />
      ))}
    </div>
  </section>
);

interface Props {
  title: string;
  content: ContentItem[];
}

export default ContentPreview;
