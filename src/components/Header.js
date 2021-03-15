import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>HOME</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/add">
            <Nav.Link>Add Superheroes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/list">
            <Nav.Link>ALL Superheroes</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
