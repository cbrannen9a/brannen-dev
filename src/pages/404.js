import React, { useEffect } from "react";
import firebase from "gatsby-plugin-firebase";
import Title from "../components/elements/title";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import "../styles/404.css";
import Rocket from "../../assets/rocket.svg";
import Earth from "../../assets/earth.svg";
import Moon from "../../assets/moon.svg";
import styled from "styled-components";

import InternalLink from "../components/elements/internalLink";

const StyledHero = styled.div`
  min-height: 100vh !important;
  background-image: linear-gradient(141deg, #632c92, #8e44ad 71%, #b14ac0);
  color: white;
  padding: 3rem 1.5rem;
  flex-grow: 1;
  flex-shrink: 0;
`;

const NotFoundPage = () => {
  useEffect(() => {
    if (!firebase) {
      return;
    }
    firebase.analytics().logEvent("404: Not Found");
  }, []);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <StyledHero>
        <Title>Lost in space</Title>
        <Title subtitle>
          Oh no! Unable to find that planet...
          <InternalLink to={"/"} colour={"link"} rounded="true">
            Head Home
          </InternalLink>
        </Title>
        <div className="objects">
          <Rocket className="rocket" />
          <Earth className="earth" />
          <Moon className="moon" />
        </div>
        <div className="stars">
          <div className="glowing_stars">
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
          </div>
        </div>
      </StyledHero>
    </Layout>
  );
};

export default NotFoundPage;
