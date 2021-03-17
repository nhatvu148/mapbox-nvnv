import React, { FC } from "react";

import { Sidebar, SidebarTrigger } from "components";

import { SidebarMiddleNav } from "./SidebarMiddleNav";

import { SidebarTopB } from "routes/components/Sidebar/SidebarTopB";
import { SidebarBottomB } from "routes/components/Sidebar/SidebarBottomB";

export const SidebarASidebar = () => (
  <Sidebar>
    {/* START SIDEBAR-OVERLAY: Close (x) */}
    {/* @ts-ignore */}
    <Sidebar.Close>
      <SidebarTrigger tag={"a"} href="javascript:;">
        <i className="fa fa-times-circle fa-fw"></i>
      </SidebarTrigger>
      {/* @ts-ignore */}
    </Sidebar.Close>
    {/* END SIDEBAR-OVERLAY: Close (x) */}

    {/* START SIDEBAR: Fixed Section */}
    {/* @ts-ignore */}
    <Sidebar.Section>
      <SidebarTopB />
      {/* @ts-ignore */}
    </Sidebar.Section>
    {/* END SIDEBAR: Fixed Section */}

    {/* START SIDEBAR: Mobile Scroll Wrapper */}
    {/* @ts-ignore */}
    <Sidebar.MobileFluid>
      {/* START SIDEBAR: Everywhere */}
      {/* @ts-ignore */}
      <Sidebar.Section fluid cover>
        {/* SIDEBAR: Menu */}
        <SidebarMiddleNav />
        {/* @ts-ignore */}
      </Sidebar.Section>
      {/* END SIDEBAR: Everywhere */}
      <SidebarBottomB />
      {/* @ts-ignore */}
    </Sidebar.MobileFluid>
    {/* END SIDEBAR: Mobile Scroll Wrapper */}
  </Sidebar>
);
