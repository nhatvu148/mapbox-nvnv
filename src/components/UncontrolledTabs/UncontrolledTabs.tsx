import React from "react";
import PropTypes from "prop-types";

import { Provider } from "./context";

class UncontrolledTabs extends React.Component<any> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initialActiveTabId: PropTypes.string
  };
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: this.props.initialActiveTabId || null
    };
  }

  render() {
    return (
      <Provider
        value={{
          // @ts-ignore
          setActiveTabId: (tabId) => {
            this.setState({ activeTabId: tabId });
          },
          // @ts-ignore
          activeTabId: this.state.activeTabId
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UncontrolledTabs };
