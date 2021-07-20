import { ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className="w-full h-full">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
