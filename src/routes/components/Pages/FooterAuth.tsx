import React, { FC } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FooterText } from "../FooterText";

// @ts-ignore
const FooterAuth: FC = ({ className }) => (
  <p className={classNames(className, "small")}>
    <FooterText />
  </p>
);
FooterAuth.propTypes = {
  className: PropTypes.string
};

export { FooterAuth };
