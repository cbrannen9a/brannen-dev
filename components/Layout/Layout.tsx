import { FC } from "react";
import Footer from "../Footer";
import Meta from "../Meta";

const Layout: FC<Props> = ({ children }) => (
  <>
    <Meta />
    <div className="max-w-7xl mx-auto relative bg-white min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

interface Props {
  preview: any;
}

export default Layout;
