import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Sidebar, SidebarTrigger } from "components";

import { SidebarMiddleNav } from "./SidebarMiddleNav";

import { SidebarTopA } from "routes/components/Sidebar/SidebarTopA";
import { SidebarBottomA } from "routes/components/Sidebar/SidebarBottomA";
import { LogoThemed } from "routes/components/LogoThemed/LogoThemed";

export const DefaultSidebar: FC = () => (
  <Sidebar>
    {/* START SIDEBAR-OVERLAY: Close (x) */}
    {/* @ts-ignore */}
    <Sidebar.Close>
      <SidebarTrigger tag={"a"} href="javascript:;">
        <i className="fa fa-times-circle fa-fw"></i>
      </SidebarTrigger>
      {/* @ts-ignore */}
    </Sidebar.Close>
    {/* START SIDEBAR-OVERLAY: Close (x) */}

    {/* START SIDEBAR: Only for Desktop */}
    {/* @ts-ignore */}
    <Sidebar.HideSlim>
      {/* @ts-ignore */}
      <Sidebar.Section>
        <Link to="/" className="sidebar__brand">
          {/* @ts-ignore */}
          {/* <LogoThemed checkBackground /> */}
        </Link>
        {/* @ts-ignore */}
      </Sidebar.Section>
      {/* @ts-ignore */}
    </Sidebar.HideSlim>
    {/* END SIDEBAR: Only for Desktop */}

    {/* START SIDEBAR: Only for Mobile */}
    {/* @ts-ignore */}
    <Sidebar.MobileFluid>
      <SidebarTopA />

      {/* @ts-ignore */}
      <Sidebar.Section fluid cover>
        {/* SIDEBAR: Menu */}
        <SidebarMiddleNav />
        {/* @ts-ignore */}
      </Sidebar.Section>

      <SidebarBottomA />
      {/* @ts-ignore */}
    </Sidebar.MobileFluid>
    {/* END SIDEBAR: Only for Mobile */}
  </Sidebar>
);
