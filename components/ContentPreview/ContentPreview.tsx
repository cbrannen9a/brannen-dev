import { ContentItem } from "@/types";
import ContentPreviewItem from "components/ContentPreviewItem";
import { FC } from "react";

const ContentPreview: FC<Props> = ({ content, title }) => (
  <section>
    <h2 className="uppercase mx-8 my-3">
      <span className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        {title.slice(0, 1)}
      </span>
      <span className="text-2xl md:text-2xl font-bold">{title.slice(1)}</span>
    </h2>
    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-16">
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
