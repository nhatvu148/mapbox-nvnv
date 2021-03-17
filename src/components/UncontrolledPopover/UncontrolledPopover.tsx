import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Popover } from "reactstrap";

class UncontrollerPopover extends React.Component<any> {
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    const { target } = this.props;

    if (typeof document !== "undefined") {
      // @ts-ignore
      this.triggerElement = document.querySelector(`#${target}`);
      // @ts-ignore
      if (!this.triggerElement) {
        // eslint-disable-next-line no-console
        console.error(
          "UncontrolledPopover: 'target' element has not been found in the DOM via querySelector"
        );
        return;
      }
      // @ts-ignore
      this.triggerElement.addEventListener(
        "click",
        this.clickEventHandler.bind(this)
      );
    }
  }

  componentDidUpdate() {
    // @ts-ignore
    if (this.props.activateTrigger && this.triggerElement) {
      const { activeClassName } = this.props;
      // @ts-ignore
      this.triggerElement.classList.toggle(activeClassName, this.state.isOpen);
    }
  }

  componentWillUnmount() {
    // @ts-ignore
    if (this.triggerElement) {
      // @ts-ignore
      this.triggerElement.removeEventListener("click", this.clickEventHandler);
    }
  }

  clickEventHandler() {
    // @ts-ignore
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      // @ts-ignore
      <Popover
        {..._.omit(this.props, ["activateTrigger", "activeClassName"])}
        // @ts-ignore
        isOpen={this.state.isOpen}
        toggle={() => {
          // @ts-ignore
          this.setState({ isOpen: !this.state.isOpen });
        }}
      >
        {this.props.children}
      </Popover>
    );
  }
}
// @ts-ignore
UncontrollerPopover.propTypes = {
  activateTrigger: PropTypes.bool,
  activeClassName: PropTypes.string
};
// @ts-ignore
UncontrollerPopover.defaultProps = {
  activateTrigger: true,
  activeClassName: "active"
};

export { UncontrollerPopover };
