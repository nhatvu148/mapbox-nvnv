import React, { FC } from "react";

import { SidebarMenu } from "components";

export const SidebarMiddleNav = () => (
  <SidebarMenu>
    {/* @ts-ignore */}
    <SidebarMenu.Item icon={<i className="fa fa-fw fa-home"></i>} title="Dashboards">
      {/* @ts-ignore */}
      <SidebarMenu.Item title="Map Page" to="/dashboards/mappage" exact />
      {/* @ts-ignore */}
      <SidebarMenu.Item title="Projects" to="/dashboards/projects" exact />
      {/* @ts-ignore */}
    </SidebarMenu.Item>
    {/* @ts-ignore */}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-th"></i>}
      title="Widgets"
      to="/widgets"
    />
  </SidebarMenu>
);
