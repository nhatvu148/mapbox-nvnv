import React, { FC } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";
import { NavLink } from "reactstrap";

import { Consumer } from "./context";

const UncontrolledTabsNavLink: FC<any> = (props) => (
  <Consumer>
    {(value) => (
      <NavLink
        {..._.omit(props, ["tabId"])}
        onClick={() => {
          // @ts-ignore
          value.setActiveTabId(props.tabId);
        }}
        // @ts-ignore
        className={classNames({ active: props.tabId === value.activeTabId })}
        href="javascript:;"
      />
    )}
  </Consumer>
);
UncontrolledTabsNavLink.propTypes = {
  tabId: PropTypes.string.isRequired
};

export { UncontrolledTabsNavLink };
