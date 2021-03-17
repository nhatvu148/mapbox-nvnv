import React from "react";
import { Route, Switch, Redirect } from "react-router";

// ----------- Pages Imports ---------------
import MapPage from "./Dashboards/MapPage";
import ProjectsDashboard from "./Dashboards/Projects";

import Widgets from "./Widgets";

// ----------- Layout Imports ---------------
import { DefaultNavbar } from "./../layout/components/DefaultNavbar";
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
  return (
    <Switch>
      <Redirect from="/" to="/dashboards/mappage" exact />

      <Route path="/dashboards/mappage" exact component={MapPage} />
      <Route path="/dashboards/projects" exact component={ProjectsDashboard} />

      <Route path="/widgets" exact component={Widgets} />

      {/*    404    */}
      <Redirect to="/pages/error-404" />
    </Switch>
  );
};

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
  <Switch>
    {/* Default Navbar: */}
    <Route component={DefaultNavbar} />
  </Switch>
);

export const RoutedSidebars = () => (
  <Switch>
    {/* Default Sidebar: */}
    <Route component={DefaultSidebar} />
  </Switch>
);
