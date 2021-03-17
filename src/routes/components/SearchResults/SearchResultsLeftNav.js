import React from "react";
import faker from "faker/locale/en_US";
import { NavLink as RouterNavLink } from "react-router-dom";

import {
  Nav,
  NavLink,
  NavItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Badge
} from "./../../../components";

const SearchResultsLeftNav = () => (
  <React.Fragment>
    {/* START Navigation */}
    <Nav vertical pills className="mb-3">
      <NavItem>
        <NavLink href="#" className="small d-flex px-1">
          <span>Navigation</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/apps/search-results" className="d-flex">
          All Results
          <Badge pill color="secondary" className="ml-auto align-self-center">
            12
          </Badge>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/apps/images-results" className="d-flex">
          Images
          <Badge pill color="secondary" className="ml-auto align-self-center">
            5
          </Badge>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/apps/videos-results" className="d-flex">
          Videos
          <Badge pill color="secondary" className="ml-auto align-self-center">
            10
          </Badge>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/apps/users-results" className="d-flex">
          Users
          <Badge pill color="secondary" className="ml-auto align-self-center">
            2
          </Badge>
        </NavLink>
      </NavItem>
    </Nav>
    {/* END Navigation */}
    {/* START Category */}
    <Nav vertical className="mb-3">
      <NavItem>
        <NavLink href="#" className="small d-flex px-1">
          <span>Category</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="d-flex">
          <span>{faker.commerce.department()}</span>
          <span className="small ml-auto align-self-center text-body">
            ({faker.finance.mask()})
          </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="d-flex">
          <span>{faker.commerce.department()}</span>
          <span className="small ml-auto align-self-center text-body">
            ({faker.finance.mask()})
          </span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" className="d-flex">
          <span>{faker.commerce.department()}</span>
          <span className="small ml-auto align-self-center text-body">
            ({faker.finance.mask()})
          </span>
        </NavLink>
      </NavItem>
    </Nav>
    {/* END Category */}
    {/* START Rating */}
    <Nav vertical className="mb-3">
      <NavItem className="mb-2">
        <NavLink href="#" className="small d-flex px-1">
          <span>Rating</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
    </Nav>
    {/* END Rating */}
    {/* START Tags */}
    <Nav vertical className="mb-3">
      <NavItem className="mb-2">
        <NavLink href="#" className="small d-flex px-1">
          <span>Tags</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
      <NavItem className="d-flex px-2 mb-2">
        <span className="small ml-auto align-self-center">
          ({faker.finance.mask()})
        </span>
      </NavItem>
    </Nav>
    {/* END Tags */}
    {/* START Price */}
    <Nav vertical className="mb-3">
      <NavItem className="mb-2">
        <NavLink href="#" className="small d-flex px-1">
          <span>Price</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
      <NavItem className="d-flex p-0">
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input placeholder="Min: 5" className="bg-white" />
          <Input placeholder="Max: 87" className="bg-white" />
          <InputGroupAddon addonType="append">
            <Button color="secondary" outline>
              <i className="fa fa-check"></i>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </NavItem>
    </Nav>
    {/* END Price */}
    {/* START Shipping */}
    <Nav vertical className="mb-3">
      <NavItem className="mb-2">
        <NavLink href="#" className="small d-flex px-1">
          <span>Shipping</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
    </Nav>
    {/* END Shipping */}
    {/* START Sales */}
    <Nav vertical className="mb-4">
      <NavItem className="mb-2">
        <NavLink href="#" className="small d-flex px-1">
          <span>Sales</span>
          <i className="fa fa-angle-down align-self-center ml-auto"></i>
        </NavLink>
      </NavItem>
    </Nav>
    {/* END Sales */}
    <Button color="primary" block>
      Confirm Changes
    </Button>
    <Button color="link" block>
      Reset to Default
    </Button>
  </React.Fragment>
);

export { SearchResultsLeftNav };
