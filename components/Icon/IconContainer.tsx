import React, { FC } from "react";

const IconContainer: FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

interface Props {
  className?: string;
}

export default IconContainer;
