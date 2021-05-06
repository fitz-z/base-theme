import { ReactNode } from "react";
import Footer from "./Footer";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className="w-full h-full min-h-screen">
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
