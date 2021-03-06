import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ThemeConsumer } from "components/Theme";

const logos = {
  white: require("./../../../images/logos/logo-white.svg"),
  primary: require("./../../../images/logos/logo-primary.svg"),
  success: require("./../../../images/logos/logo-success.svg"),
  warning: require("./../../../images/logos/logo-warning.svg"),
  danger: require("./../../../images/logos/logo-danger.svg"),
  info: require("./../../../images/logos/logo-info.svg"),
  indigo: require("./../../../images/logos/logo-indigo.svg"),
  purple: require("./../../../images/logos/logo-purple.svg"),
  pink: require("./../../../images/logos/logo-pink.svg"),
  yellow: require("./../../../images/logos/logo-yellow.svg")
};

// @ts-ignore
const getLogoUrl = (style, color) => {
  // @ts-ignore
  return logos[color];
};

// Check for background
// @ts-ignore
const getLogoUrlBackground = (style, color) => {
  if (style === "color") {
    return logos["white"];
  } else {
    return getLogoUrl(style, color);
  }
};

const LogoThemed: FC<any> = ({ checkBackground, className, ...otherProps }) => (
  <ThemeConsumer>
    {/* @ts-ignore */}
    {({ style, color }) => (
      <img
        src={
          checkBackground
            ? getLogoUrlBackground(style, color)
            : getLogoUrl(style, color)
        }
        className={classNames("d-block", className)}
        alt="Logo"
        {...otherProps}
      />
    )}
  </ThemeConsumer>
);
LogoThemed.propTypes = {
  checkBackground: PropTypes.bool,
  className: PropTypes.string
};

export { LogoThemed };
