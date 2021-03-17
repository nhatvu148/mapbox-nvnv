import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Modal } from "reactstrap";

import { Provider } from "./context";

class UncontrolledModal extends React.Component<any> {
  static propTypes = {
    target: PropTypes.string.isRequired
  };
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    // @ts-ignore
    this.boundClickEventHandler = this.clickEventHandler.bind(this);
  }

  componentDidMount() {
    if (typeof document !== "undefined") {
      // @ts-ignore
      this.triggerElement = document.querySelector(`#${this.props.target}`);
      // @ts-ignore
      if (!this.triggerElement) {
        // eslint-disable-next-line no-console
        console.error(
          "UncontrolledModal: 'target' element has not been found in the DOM via querySelector"
        );
        return;
      }
      // @ts-ignore
      this.triggerElement.addEventListener("click", this.boundClickEventHandler);
    }
  }

  componentWillUnmount() {
    // @ts-ignore
    if (this.triggerElement) {
      // @ts-ignore
      this.triggerElement.removeEventListener("click", this.boundClickEventHandler);
    }
  }

  clickEventHandler() {
    this.setState({ isOpen: true });
  }

  render() {
    const modalProps = _.omit(this.props, ["target"]);
    const toggleModal = () => {
      // @ts-ignore
      this.setState({ isOpen: !this.state.isOpen });
    };

    return (
      <Provider value={{ toggleModal }}>
        {/* @ts-ignore */}
        <Modal {...modalProps} isOpen={this.state.isOpen} toggle={toggleModal} />
      </Provider>
    );
  }
}

export { UncontrolledModal };
