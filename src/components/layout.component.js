import * as React from "react";
import Header from "./header.component";
import LayoutContent from "./layout-content.component";

const Layout = (props) => {
  return (
    <>
      <Header />
      <LayoutContent>{props.children}</LayoutContent>
    </>
  );
};

export default Layout;
