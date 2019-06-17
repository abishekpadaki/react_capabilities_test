import React from "react";
import "./main.scss";

const Sidebar = props => {
  const { children } = props;
  return <div className="sidenav">{children}</div>;
};

export default Sidebar;
