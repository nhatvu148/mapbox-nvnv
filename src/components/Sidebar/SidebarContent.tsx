import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Common from "common";

export class SidebarContent extends React.Component<any> {
  static propTypes = {
    children: PropTypes.node,
    slim: PropTypes.bool,
    collapsed: PropTypes.bool,
    animationsDisabled: PropTypes.bool,
    pageConfig: PropTypes.object
  };

  sidebarRef = React.createRef();
  // @ts-ignore
  constructor(props) {
    super(props);

    this.state = {
      entryAnimationFinished: false
    };
  }

  componentDidMount() {
    // @ts-ignore
    this.sidebarEntryAnimate = new Common.SidebarEntryAnimate();
    // @ts-ignore
    this.slimSidebarAnimate = new Common.SlimSidebarAnimate();
    // @ts-ignore
    this.slimMenuAnimate = new Common.SlimMenuAnimate();

    // @ts-ignore
    this.sidebarEntryAnimate.assignParentElement(this.sidebarRef.current);
    // @ts-ignore
    this.slimSidebarAnimate.assignParentElement(this.sidebarRef.current);
    // @ts-ignore
    this.slimMenuAnimate.assignSidebarElement(this.sidebarRef.current);

    // @ts-ignore
    this.sidebarEntryAnimate.executeAnimation().then(() => {
      this.setState({ entryAnimationFinished: true });
    });
  }

  componentWillUnmount() {
    // @ts-ignore
    this.sidebarEntryAnimate.destroy();
    // @ts-ignore
    this.slimSidebarAnimate.destroy();
    // @ts-ignore
    this.slimMenuAnimate.destroy();
  }

  render() {
    const { animationsDisabled, collapsed, pageConfig, slim, children } = this.props;

    const sidebarClass = classNames("sidebar", "sidebar--animations-enabled", {
      "sidebar--slim": slim || pageConfig.sidebarSlim,
      "sidebar--collapsed": collapsed || pageConfig.sidebarCollapsed,
      "sidebar--animations-disabled":
        animationsDisabled || pageConfig.animationsDisabled,
      // @ts-ignore
      "sidebar--animate-entry-complete": this.state.entryAnimationFinished
    });

    return (
      // @ts-ignore
      <div className={sidebarClass} ref={this.sidebarRef}>
        {children}
      </div>
    );
  }
}
