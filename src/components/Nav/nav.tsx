import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Nav as BsNav } from "reactstrap";

// @ts-ignore
const Nav: FC = ({ accent, className, ...otherProps }) => {
  return (
    <BsNav
      className={classNames(className, "nav", { "nav-accent": accent })}
      {...otherProps}
    />
  );
};
Nav.propTypes = {
  // @ts-ignore
  ...BsNav.propTypes,
  accent: PropTypes.bool
};
Nav.defaultProps = {
  accent: false
};

export { Nav };
