import React, { FC } from "react";
import PropTypes from "prop-types";

const LayoutNavbar: FC = (props) => {
  const navbar = React.Children.only(props.children);

  return (
    <div className="layout__navbar">
      {/* @ts-ignore */}
      {React.cloneElement(navbar, { fixed: null })}
    </div>
  );
};

LayoutNavbar.propTypes = {
  children: PropTypes.node
};
// @ts-ignore
LayoutNavbar.layoutPartName = "navbar";

export { LayoutNavbar };
