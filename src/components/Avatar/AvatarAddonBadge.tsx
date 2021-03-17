import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Badge } from "reactstrap";

const AvatarAddonBadge: FC = (props) => {
  const { children, ...badgeProps } = props;

  return <Badge {...badgeProps}>{children}</Badge>;
};
AvatarAddonBadge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
// @ts-ignore
AvatarAddonBadge.addOnId = "avatar--badge";

export { AvatarAddonBadge };
