import React, { FC } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import _ from "lodash";

// Safely gets the browser document object,
// returns a simple mock for server rendering purposes
const getDocument = () =>
  typeof document === "undefined"
    ? {
        querySelector() {
          return null;
        }
      }
    : document;

/*
    Calls an EventHandler when User clicks outside of the child element
*/
class OuterClick extends React.Component<any> {
  static propTypes = {
    onClickOutside: PropTypes.func,
    children: PropTypes.node,
    excludedElements: PropTypes.array,
    active: PropTypes.bool
  };

  static defaultProps = {
    onClickOutside: () => {},
    excludedElements: [],
    active: true
  };

  componentDidMount() {
    // @ts-ignore
    this.rootElement = getDocument().querySelector("body");
    // @ts-ignore
    if (this.rootElement) {
      // @ts-ignore
      this.rootElement.addEventListener("click", this.handleDocumentClick);
      // @ts-ignore
      this.rootElement.addEventListener("touchstart", this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    // @ts-ignore
    if (this.rootElement) {
      // @ts-ignore
      this.rootElement.removeEventListener("click", this.handleDocumentClick);
      // @ts-ignore
      this.rootElement.removeEventListener("touchstart", this.handleDocumentClick);
    }
  }
  // @ts-ignore
  assignRef(elementRef) {
    // @ts-ignore
    this.elementRef = elementRef;
  }
  // @ts-ignore
  handleDocumentClick = (evt) => {
    if (this.props.active) {
      // eslint-disable-next-line react/no-find-dom-node
      // @ts-ignore
      const domElement = ReactDOM.findDOMNode(this.elementRef);

      const isExcluded = _.some(
        this.props.excludedElements,
        // eslint-disable-next-line react/no-find-dom-node
        // @ts-ignore
        (element) => element && ReactDOM.findDOMNode(element).contains(evt.target)
      );
      // @ts-ignore
      if (!isExcluded && !domElement.contains(evt.target)) {
        this.props.onClickOutside(evt);
      }
    }
  };

  render() {
    const onlyChild = React.Children.only(this.props.children);

    const updatedChild = React.isValidElement(onlyChild)
      ? React.cloneElement(onlyChild, { ref: this.assignRef.bind(this) })
      : onlyChild;

    return updatedChild;
  }
}

export { OuterClick };
