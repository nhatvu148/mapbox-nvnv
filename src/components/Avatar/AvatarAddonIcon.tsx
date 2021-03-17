import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// @ts-ignore
import avatarColors from "colors.scss";

const AvatarAddonIcon: FC = (props) => {
  const addOnClass = classNames(
    {
      // @ts-ignore
      avatar__icon__inner: props.small
    },
    // @ts-ignore
    avatarColors[`fg-color--${props.color}`]
  );

  // @ts-ignore
  return <i className={classNames(addOnClass, props.className)}></i>;
};
AvatarAddonIcon.propTypes = {
  small: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string
};
AvatarAddonIcon.defaultProps = {
  color: "success"
};
// @ts-ignore
AvatarAddonIcon.addOnId = "avatar--icon";

export { AvatarAddonIcon };
