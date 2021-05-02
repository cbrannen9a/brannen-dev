import { FC } from "react";
import Link from "next/link";
import Img from "next/image";
import { urlForImage } from "@/lib/client";
import { SanityBlockContent } from "@/types";
import Date from "../Date";

const ContentPreviewItem: FC<Props> = ({
  title,
  mainImage,
  publishedAt,
  description,
  slug,
  skills,
}) => (
  <div className="m-4 border-2 p-8 rounded-xl">
    <div className="mb-5" role="presentation">
      {mainImage ? (
        <Img
          src={urlForImage(mainImage).url()}
          width={384}
          height={192}
          alt={mainImage.alt}
        />
      ) : (
        <div className="bg-gray-300 h-48 w-96" />
      )}
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:text-blue-500">{title}</a>
      </Link>
    </h3>
    {publishedAt ? (
      <div className="text-lg mb-4">
        <Date dateString={publishedAt} />
      </div>
    ) : null}
    <p className="text-lg leading-relaxed mb-4">{description}</p>
    {skills ? (
      <div className="flex flex-row">
        {skills.map((skill) => (
          <div key={skill.title}>{skill.title}</div>
        ))}
      </div>
    ) : null}
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
