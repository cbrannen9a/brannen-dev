import { FC } from "react";
import Link from "next/link";
import { SanityBlockContent } from "@/types";
import Date from "../Date";
import CoverImage from "../CoverImage";

const ContentPreviewItem: FC<Props> = ({
  title,
  mainImage,
  publishedAt,
  description,
  slug,
  skills,
}) => (
  <div>
    <div className="mb-5" role="presentation">
      <CoverImage slug={slug} title={title} image={mainImage} />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:text-blue-500">{title}</a>
      </Link>
    </h3>
    {publishedAt && (
      <div className="text-lg mb-4">
        <Date dateString={publishedAt} />
      </div>
    )}
    <p className="text-lg leading-relaxed mb-4">{description}</p>
    {skills && skills.map((skill) => <div>{skill.title}</div>)}
  </div>
);

interface Props {
  title: string;
  mainImage: any;
  publishedAt: string;
  description: string;
  slug: string;
  skills: { title: string; description: SanityBlockContent }[];
}

export default ContentPreviewItem;
