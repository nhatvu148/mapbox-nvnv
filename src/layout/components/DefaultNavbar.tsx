import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavItem, SidebarTrigger } from "components";

import { NavbarUser } from "./NavbarUser";
import { LogoThemed } from "routes/components/LogoThemed/LogoThemed";

export const DefaultNavbar: FC = () => (
  // @ts-ignore
  <Navbar light expand="xs" fluid>
    {/* @ts-ignore */}
    <Nav navbar>
      <NavItem className="mr-3">
        <SidebarTrigger />
      </NavItem>
      <NavItem className="navbar-brand d-lg-none">
        <Link to="/">
          <LogoThemed />
        </Link>
      </NavItem>
      <NavItem className="d-none d-md-block">
        <span className="navbar-text">
          <Link to="/">
            <i className="fa fa-home"></i>
          </Link>
        </span>
        <span className="navbar-text px-2">
          <i className="fa fa-angle-right"></i>
        </span>
        <span className="navbar-text">
          <Link to="/">Start</Link>
        </span>
        <span className="navbar-text px-2">
          <i className="fa fa-angle-right"></i>
        </span>
        <span className="navbar-text">Page Link</span>
      </NavItem>
    </Nav>
    {/* @ts-ignore */}
    <Nav navbar className="ml-auto">
      {/* @ts-ignore */}
      <NavbarUser className="ml-2" />
    </Nav>
  </Navbar>
);
