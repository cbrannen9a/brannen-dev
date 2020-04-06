import React from "react";
import BaseHoverableTag from "./baseHoverableTag";
import LightTag from "./lightTag";

const LightHoverableTag = ({ title, description }) => (
  <BaseHoverableTag description={description}>
    <LightTag title={title} />
  </BaseHoverableTag>
);

export default LightHoverableTag;
