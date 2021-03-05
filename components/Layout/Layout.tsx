import Content from "components/Content";
import React, { FC } from "react";
// import Navbar from "../Navbar";

const Layout: FC = ({ children }) => (
  <>
    {/* <Navbar /> */}
    <Content>{children}</Content>
  </>
);

export default Layout;
