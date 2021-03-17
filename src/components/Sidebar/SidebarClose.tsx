import React, { FC } from "react";
import PropTypes from "prop-types";

const SidebarClose: FC<any> = (props) => (
  <div className="sidebar__close">{props.children}</div>
);
SidebarClose.propTypes = {
  children: PropTypes.node
};

export { SidebarClose };
