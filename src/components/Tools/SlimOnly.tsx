import React, { FC } from "react";
import PropTypes from "prop-types";
// @ts-ignore
import MediaQuery from "react-responsive";

import { withPageConfig } from "components/Layout/withPageConfig";

const SlimOnly: FC<any> = (props) => (
  <MediaQuery minWidth={992}>
    {props.pageConfig.sidebarSlim &&
      props.pageConfig.sidebarCollapsed &&
      props.children}
  </MediaQuery>
);
SlimOnly.propTypes = {
  children: PropTypes.node.isRequired,
  pageConfig: PropTypes.object
};

const ExtendedSlimOnly = withPageConfig(SlimOnly);

export { ExtendedSlimOnly as SlimOnly };
