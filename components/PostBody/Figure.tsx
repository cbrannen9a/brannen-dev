import React from "react";
import Img from "next/image";
import { urlForImage } from "lib/client/sanityClient";

const Figure = ({ node }) => {
  if (!node || !node.asset) {
    return null;
  }
  return (
    <figure>
      <Img
        src={urlForImage(node.asset.url)
          .height(300)
          .width(300)
          .fit("fill")
          .url()}
        width={300}
        height={300}
        alt={node.alt}
      />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

export default Figure;
