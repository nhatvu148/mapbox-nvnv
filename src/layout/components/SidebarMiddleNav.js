import React from "react";

import { SidebarMenu } from "components";

export const SidebarMiddleNav = () => (
  <SidebarMenu>
    <SidebarMenu.Item icon={<i className="fa fa-fw fa-home"></i>} title="Dashboards">
      <SidebarMenu.Item title="Map Page" to="/dashboards/mappage" exact />
      <SidebarMenu.Item title="Projects" to="/dashboards/projects" exact />
    </SidebarMenu.Item>
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-th"></i>}
      title="Widgets"
      to="/widgets"
    />
  </SidebarMenu>
);
