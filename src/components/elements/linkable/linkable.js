import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = styled.a`
  margin: 5px;
  border-radius: 290486px;

  background-color: #f5f5f5;
  border-color: transparent;
  color: #4a4a4a !important;

  height: 2.572em;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;

  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: calc(0.375em - 1px);
  padding-top: calc(0.375em - 1px);

  text-align: center;
  white-space: nowrap;
  line-height: 2.5;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  text-decoration: none;
  :hover,
  :active,
  :focus {
    background-color: #dbdbdb;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-top: 11px;
  margin-right: 3px;
`;

const Linkable = ({ link, name, icon }) => {
  return (
    <Link href={link}>
      <Icon icon={icon} />
      {name}
    </Link>
  );
};

Linkable.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Linkable;
