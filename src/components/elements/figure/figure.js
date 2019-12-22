import React from "react";
import { buildImageObj } from "../../../utils/helper";
import { imageUrlFor } from "../../../utils/imageUrl";

const Figure = props => {
  return (
    <figure>
      {props.asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(props.width)
            .url()}
          alt={props.alt}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
};

export default Figure;
