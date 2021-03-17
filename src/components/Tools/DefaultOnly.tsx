import React, { FC } from "react";
import PropTypes from "prop-types";
// @ts-ignore
import MediaQuery from "react-responsive";

import { withPageConfig } from "components/Layout/withPageConfig";

const DefaultOnly: FC<any> = (props) => (
  <React.Fragment>
    {props.pageConfig.sidebarSlim && props.pageConfig.sidebarCollapsed ? (
      <MediaQuery maxWidth={991.8}>{props.children}</MediaQuery>
    ) : (
      props.children
    )}
  </React.Fragment>
);
DefaultOnly.propTypes = {
  children: PropTypes.node.isRequired,
  pageConfig: PropTypes.object
};

const ExtendedDefaultOnly = withPageConfig(DefaultOnly);

export { ExtendedDefaultOnly as DefaultOnly };
