import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExternalLink from "../externalLink";

const Icon = styled(FontAwesomeIcon)`
  margin-top: 6px;
  margin-right: 3px;
`;

const Linkable = ({ link, name, icon }) => {
  return (
    <ExternalLink to={link} colour={"light"} rounded>
      <Icon icon={icon} />
      {name}
    </ExternalLink>
  );
};

Linkable.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Linkable;
