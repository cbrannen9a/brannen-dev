import { FC } from "react";
import cn from "classnames";
import Link from "next/link";
import { urlForImage } from "@/lib/client";

const CoverImage: FC<Props> = ({ title, slug, image: source }) => {
  const image = source ? (
    <img
      width={2000}
      height={1000}
      alt={`${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={urlForImage(source).height(1000).width(2000).url()}
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

interface Props {
  title: string;
  slug?: string;
  image: any;
}

export default CoverImage;
