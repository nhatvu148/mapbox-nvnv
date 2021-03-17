import React, { FC } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import classNames from "classnames";

const EmptyLayoutSection: FC = (props) => {
  // @ts-ignore
  const sectionClass = classNames(props.className, "fullscreen__section", {
    // @ts-ignore
    "fullscreen__section--center": props.center
  });
  // @ts-ignore
  const maxWidth = _.isNumber(props.width) ? `${props.width}px` : props.width;
  return (
    <div className={sectionClass}>
      {/* @ts-ignore */}
      {props.center ? (
        <div className="fullscrenn__section__child" style={{ maxWidth }}>
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};
EmptyLayoutSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
EmptyLayoutSection.defaultProps = {
  width: "420px"
};

export { EmptyLayoutSection };
