import React from "react";
import "./styles/Page.css";

function Page({ children }) {
  // the classNames determines the transition animation style name, define them in css
  return <section className="page">{children}</section>;
}

export default Page;
