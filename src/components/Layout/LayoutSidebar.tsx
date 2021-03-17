import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const LayoutSidebar: FC = (props) => {
  const sidebarClass = classNames("layout__sidebar", {
    // @ts-ignore
    "layout__sidebar--slim": props.sidebarSlim,
    // @ts-ignore
    "layout__sidebar--collapsed": props.sidebarCollapsed
  });

  return <div className={sidebarClass}>{props.children}</div>;
};

LayoutSidebar.propTypes = {
  children: PropTypes.node,
  sidebarSlim: PropTypes.bool,
  sidebarCollapsed: PropTypes.bool
};
// @ts-ignore
LayoutSidebar.layoutPartName = "sidebar";

export { LayoutSidebar };
