import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { DropdownMenu } from "reactstrap";

// @ts-ignore
export const ExtendedDropdown: FC = ({ className, ...otherProps }) => {
  const classes = classNames(className, "extended-dropdown");
  return <DropdownMenu className={classes} {...otherProps} />;
};
ExtendedDropdown.propTypes = {
  className: PropTypes.string
};
