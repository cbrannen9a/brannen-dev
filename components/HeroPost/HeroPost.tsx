import { FC } from "react";
import Link from "next/link";
import Avatar from "../Avatar";
import Date from "../Date";
import CoverImage from "../CoverImage";
import BlockContent from "@sanity/block-content-to-react";

const HeroPost: FC<Props> = ({
  title,
  coverImage,

  body,

  slug,
}) => {
  return (
    <section>
      <div className="m-8">
        <CoverImage slug={slug} title={title} image={coverImage} />
        <BlockContent blocks={body} />
      </div>
    </section>
  );
};

interface Props {
  title: string;
  coverImage: any;
  date: string;
  body: [];
  slug: string;
}

export default HeroPost;
