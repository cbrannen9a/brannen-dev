import { FC } from "react";
import Link from "next/link";
import Date from "../Date";
import CoverImage from "../CoverImage";

const PostPreview: FC<Props> = ({ title, coverImage, date, excerpt, slug }) => (
  <div>
    <div className="mb-5" role="presentation">
      <CoverImage slug={slug} title={title} image={coverImage} />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:text-blue-500">{title}</a>
      </Link>
    </h3>
    {date && (
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
    )}
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  </div>
);

interface Props {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  slug: string;
}

export default PostPreview;
