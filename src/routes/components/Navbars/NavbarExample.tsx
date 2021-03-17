import React, { FC } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Avatar,
  AvatarAddOn,
  Button,
  DropdownToggle,
  NavbarThemeProvider,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  UncontrolledCollapse,
  UncontrolledDropdown
} from "components";

import { NavbarUser } from "layout/components/NavbarUser";
import { NavbarNavigation } from "./NavbarNavigation";

import { randomAvatar } from "../../../utilities";

//@ts-ignore
const NavbarExample: FC = ({ themeColor, themeStyle, navStyle }) => {
  return (
    <NavbarThemeProvider style={themeStyle} color={themeColor} className="shadow-sm">
      {/* @ts-ignore */}
      <Navbar expand="lg" themed>
        <Link to="/">
          <NavbarBrand className="mb-0" tag="div">
            react.bs4
          </NavbarBrand>
        </Link>

        {/* @ts-ignore */}
        <Nav pills>
          <NavItem>
            <NavLink
              tag={NavbarToggler}
              id="navbar-navigation-toggler"
              className="b-0"
            >
              <i className="fa fa-fw fa-bars"></i>
            </NavLink>
          </NavItem>
        </Nav>

        {/* Navigation with Collapse */}
        <UncontrolledCollapse navbar toggler="#navbar-navigation-toggler">
          <NavbarNavigation
            // @ts-ignore
            pills={navStyle === "pills"}
            accent={navStyle === "accent"}
          />
        </UncontrolledCollapse>

        {/* END Navbar: Left Side */}
        {/* START Navbar: Right Side */}
        {/* @ts-ignore */}
        <Nav className="ml-auto" pills>
          {/* START Navbar: Dropdown */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              {/* @ts-ignore */}
              <Avatar.Image
                size="sm"
                src={randomAvatar()}
                addOns={[
                  <AvatarAddOn.Icon
                    // @ts-ignore
                    className="fa fa-circle"
                    color="white"
                    key="avatar-icon-bg"
                  />,
                  <AvatarAddOn.Icon
                    // @ts-ignore
                    className="fa fa-circle"
                    color="danger"
                    key="avatar-icon-fg"
                  />
                ]}
              />
            </DropdownToggle>
          </UncontrolledDropdown>
          {/* END Navbar: Dropdown */}
          {/* @ts-ignore */}
          <NavbarUser className="d-none d-lg-block" />
        </Nav>
        {/* END Navbar: Right Side */}
      </Navbar>

      {/* @ts-ignore */}
      <Navbar light expand="lg" className="py-3 bg-white">
        <h1 className="mb-0 h4">Navbar Only</h1>

        <Button color={themeColor} className="px-4 my-sm-0">
          Download <i className="fa ml-1 fa-fw fa-download"></i>
        </Button>
      </Navbar>
    </NavbarThemeProvider>
  );
};

NavbarExample.propTypes = {
  navStyle: PropTypes.oneOf(["pills", "accent", "default"]),
  themeStyle: PropTypes.string,
  themeColor: PropTypes.string
};
NavbarExample.defaultProps = {
  navStyle: "default",
  themeStyle: "dark",
  themeColor: "primary"
};

export { NavbarExample };
