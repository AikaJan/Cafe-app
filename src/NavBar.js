import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ snacks, drinks }) {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          <p>
            Snack ({snacks.length}) or Booze ({drinks.length})
          </p>
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{ margin: "10px" }} to="/snacks">
              Snacks
            </NavLink>
            <NavLink style={{ margin: "10px" }} to="/drinks">
              {" "}
              Drinks{" "}
            </NavLink>
            <NavLink style={{ margin: "10px" }} to="/add">
              {" "}
              Add-food
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
