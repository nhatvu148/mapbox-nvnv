import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { UncontrolledDropdown } from "reactstrap";

import { Provider } from "./context";

export class NestedDropdown extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      openId: null
    };
  }
  // @ts-ignore
  handleOpen(targetId) {
    this.setState({
      openId: targetId
    });
  }

  render() {
    // @ts-ignore
    const { tag: Tag, className, children, ...otherProps } = this.props;
    const dropdownClass = classNames(className, "nested-dropdown");

    return (
      <Tag {...otherProps} className={dropdownClass}>
        <Provider
          value={{
            // @ts-ignore
            openId: this.state.openId,
            onOpen: this.handleOpen.bind(this)
          }}
        >
          {children}
        </Provider>
      </Tag>
    );
  }
}
// @ts-ignore
NestedDropdown.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node
};
// @ts-ignore
NestedDropdown.defaultProps = {
  tag: UncontrolledDropdown
};
