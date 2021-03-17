import React, { FC } from "react";
import PropTypes from "prop-types";

import { Consumer } from "./ThemeContext";

const ThemeClass: FC<any> = ({ children, color, style }) => {
  const layoutThemeClass = `layout--theme--${style}--${color}`;

  return children(layoutThemeClass);
};
ThemeClass.propTypes = {
  children: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.string
};
// @ts-ignore
const ContextThemeClass = (otherProps) => (
  <Consumer>
    {/* @ts-ignore */}
    {(themeState) => <ThemeClass {...{ ...themeState, ...otherProps }} />}
  </Consumer>
);

export { ContextThemeClass as ThemeClass };
