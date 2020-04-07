import React from "react";
import BaseHoverableTag from "./baseHoverableTag";
import BaseTag from "./baseTag";

const HoverableTag = ({ title, description }) => (
  <BaseHoverableTag description={description}>
    <BaseTag title={title} />
  </BaseHoverableTag>
);

export default HoverableTag;
