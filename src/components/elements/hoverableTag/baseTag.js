import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tag = styled.div`
  margin-bottom: 0.5rem;
  align-items: center;
  background-color: #f9f5fb;
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
  box-shadow: 2px 5px 5px #3b1a57, -1px -2px 0px #dfd4e9;
`;

const BaseTag = ({ title }) => <Tag>{title}</Tag>;

BaseTag.propTypes = {
  title: PropTypes.string.isRequired
};

export default BaseTag;
