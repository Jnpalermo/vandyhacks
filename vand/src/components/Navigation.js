import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar variant="transparent">
      <LinkContainer to="/">
        <Navbar.Brand className="brand">
          <img
            src="hand-logo-3.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Brand logo of hand "
          />
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto">
        <LinkContainer className="test" to="/">
          <Nav.Link className="navl">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/About">
          <Nav.Link className="navl">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="Contact">
          <Nav.Link className="navl">Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default withRouter(Navigation);
