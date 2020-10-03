import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <Navbar className="static-bottom" variant="transparent">
      <Nav.Link className="navl">somewhere</Nav.Link>
      <Nav.Link className="navl">somewhere</Nav.Link>
      <Nav.Link className="navl">somewhere</Nav.Link>
      <Nav.Link className="navl">somewhere</Nav.Link>
      <Nav.Link className="navl">somewhere</Nav.Link>
    </Navbar>
  );
};

export default Footer;
