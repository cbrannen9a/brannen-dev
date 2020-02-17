import React from "react";
import Title from "../title";
import InternalLink from "../internalLink";

const GridHeader = ({ title, link, buttonTitle, buttonColour }) => {
  return (
    <Title>
      {title}
      <InternalLink to={`/${link}/`} colour={buttonColour}>
        {buttonTitle}
      </InternalLink>
    </Title>
  );
};

export default GridHeader;
