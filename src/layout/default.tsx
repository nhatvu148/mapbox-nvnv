import React, { FC } from "react";
import PropTypes from "prop-types";

import {
  Layout,
  ThemeSelector,
  ThemeProvider,
  PageConfigConsumer
} from "components";

import "styles/bootstrap.scss";
import "styles/main.scss";
import "styles/plugins/plugins.scss";
import "styles/plugins/plugins.css";

import { RoutedNavbars, RoutedSidebars } from "routes";

const favIcons = [
  {
    rel: "icon",
    type: "image/x-icon",
    href: require("images/favicons/favicon.ico")
  },

  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: require("images/favicons/apple-touch-icon.png")
  },

  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: require("images/favicons/favicon-32x32.png")
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: require("images/favicons/favicon-16x16.png")
  }
];

class AppLayout extends React.Component<any> {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <ThemeProvider initialStyle="light" initialColor="primary">
        <Layout sidebarSlim favIcons={favIcons}>
          {/* --------- Navbar ----------- */}
          {/* @ts-ignore */}
          <Layout.Navbar>
            <RoutedNavbars />
            {/* @ts-ignore */}
          </Layout.Navbar>
          {/* -------- Sidebar ------------*/}
          {/* @ts-ignore */}
          <Layout.Sidebar>
            <RoutedSidebars />
            {/* @ts-ignore */}
          </Layout.Sidebar>

          {/* -------- Content ------------*/}
          {/* @ts-ignore */}
          <Layout.Content>{children}</Layout.Content>

          {/* -- Theme Selector (DEMO) ----*/}
          <PageConfigConsumer>
            {/* @ts-ignore */}
            {({ sidebarHidden, navbarHidden }) => (
              <ThemeSelector styleDisabled={sidebarHidden && navbarHidden} />
            )}
          </PageConfigConsumer>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default AppLayout;
