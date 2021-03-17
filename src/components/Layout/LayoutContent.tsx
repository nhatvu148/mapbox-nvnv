import React, { FC } from "react";
import PropTypes from "prop-types";

const LayoutContent: FC = (props) => (
  <div className="layout__content">{props.children}</div>
);

LayoutContent.propTypes = {
  children: PropTypes.node
};
// @ts-ignore
LayoutContent.layoutPartName = "content";

export { LayoutContent };
