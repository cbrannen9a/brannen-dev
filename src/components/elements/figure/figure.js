import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../../../config/sanity";

const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    clientConfig
  );
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

export default Figure;
