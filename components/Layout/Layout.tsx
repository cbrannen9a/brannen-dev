import { FC } from "react";
import Alert from "../Alert";
import Footer from "../Footer";
import Meta from "../Meta";

const Layout: FC<Props> = ({ preview, children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

interface Props {
  preview: any;
}

export default Layout;
