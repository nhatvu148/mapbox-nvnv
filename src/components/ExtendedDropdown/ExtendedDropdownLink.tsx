import React, { FC } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import { DropdownContext } from "reactstrap/es/DropdownContext";

const ExtendedDropdownLink: FC = (props) => {
  const { children, ...otherProps } = props;

  return (
    <DropdownContext.Consumer>
      {/* @ts-ignore */}
      {({ toggle }) => (
        // @ts-ignore
        <Link
          {...otherProps}
          onClick={() => {
            toggle();
          }}
        >
          {children}
        </Link>
      )}
    </DropdownContext.Consumer>
  );
};
// @ts-ignore
ExtendedDropdownLink.propTypes = { ...Link.propTypes };
// @ts-ignore
ExtendedDropdownLink.defaultProps = { ...Link.defaultProps };

export { ExtendedDropdownLink };
