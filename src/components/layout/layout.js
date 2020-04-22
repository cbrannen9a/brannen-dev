import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../styled/globalStyles";
//Add icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Layout = ({ children }) => (
  <GlobalStyles>
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </GlobalStyles>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
