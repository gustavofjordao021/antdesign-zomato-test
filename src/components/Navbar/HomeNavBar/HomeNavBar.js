import React from "react";
import { Link } from "react-router-dom";
import "./HomeNavBar.css";

import {
  Col,
  Nav,
  Row,
  Button,
  Navbar,
  NavItem,
  NavLink,
  Container,
  NavbarBrand,
  UncontrolledCollapse,
} from "reactstrap";

const HomeNavBar = () => {
  return (
    <>
      <Navbar
        className="navbar-top mt-2 navbar-horizontal navbar-dark p-2"
        expand="md"
      >
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              id="brand-logo"
              alt="brand-logo"
              src={require("../../../assets/img/brand/logo-flor.svg")}
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../../assets/img/brand/logo-flor.svg")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/signup" tag={Link}>
                  <Button className="main-cta" color="primary">
                    Signup
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link-icon" to="/login" tag={Link}>
                  <Button
                    color="secondary"
                    className="login-button-text secondary-cta"
                  >
                    Login
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavBar;
