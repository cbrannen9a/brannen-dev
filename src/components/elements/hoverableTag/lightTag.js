import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tag = styled.div`
  margin-bottom: 0.5rem;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  box-shadow: 2px 3px 3px #969699, -1px -2px 0px #dddcde;
`;

const LightTag = ({ title }) => <Tag>{title}</Tag>;

LightTag.propTypes = {
  title: PropTypes.string.isRequired
};

export default LightTag;
