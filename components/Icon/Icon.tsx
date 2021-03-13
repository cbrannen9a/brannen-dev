import React, { FC } from "react";
import { MdMailOutline } from "react-icons/md";
import { FaTwitter, FaGithub } from "react-icons/fa";
import IconContainer from "./IconContainer";

const Icon: FC<Props> = ({ className = "", icon }) => {
  if (!icon) {
    return null;
  }

  switch (icon.toLowerCase()) {
    case "email":
      return (
        <IconContainer className={className}>
          <MdMailOutline />
        </IconContainer>
      );

    case "twitter":
      return (
        <IconContainer className={className}>
          <FaTwitter />
        </IconContainer>
      );

    case "github":
      return (
        <IconContainer className={className}>
          <FaGithub />
        </IconContainer>
      );

    default:
      return null;
  }
};

interface Props {
  className?: string;
  icon: string;
}

export default Icon;
