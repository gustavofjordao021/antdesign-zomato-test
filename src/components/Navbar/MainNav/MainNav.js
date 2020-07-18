import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/index";

import "./MainNav.css";

import { Col, Card, Button, NavItem, Container } from "reactstrap";

const MainNav = (props) => {
  const { passedDownToggleNewPlantForm } = props;
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { userLogOut } = context;
        return (
          <>
            <Col className="p-0 fixed-height navbar-vertical" id="overflow-nav">
              <Card
                className="fixed-height bg-secondary shadow column-container"
                id="nav-content"
              >
                <Container className="goal-container p-0">
                  <Link to="/app" className="navbar-nav navbar-brand">
                    <div className="center-logo">
                      <div className="logo-divider">
                        <img
                          alt="reversed logo"
                          src={require("../../../assets/img/brand/logo-goalify.svg")}
                          className="mr-2"
                        />
                      </div>{" "}
                      <div>
                        <span className="hello-user" id="center-logo">
                          Goalify
                        </span>
                      </div>
                    </div>
                  </Link>{" "}
                  <Container className="goal-container p-0">
                    <NavItem className="nav-button">
                      <Link to={"/app"}>
                        <Button
                          color="secondary"
                          outline
                          block
                          type="button"
                          className="nav-button-item"
                        >
                          <div className="center-logo">
                            <img
                              alt="home-icon"
                              src={require("../../../assets/img/icons/home-52.svg")}
                              className="mr-2"
                            />{" "}
                            <span className="hello-user" id="center-logo">
                              Home
                            </span>
                          </div>
                        </Button>
                      </Link>
                    </NavItem>
                  </Container>
                  <Container className="goal-container p-0">
                    <span className="hello-user" id="center-logo">
                      Collections
                    </span>
                  </Container>
                  <Container className="goal-container p-0">
                    <span className="hello-user" id="center-logo">
                      Settings
                    </span>
                    <NavItem className="nav-button">
                      <Link to={"/app/user-profile"}>
                        <Button
                          color="secondary"
                          outline
                          block
                          type="button"
                          className="nav-button-item"
                        >
                          <div className="center-logo">
                            <div className="logo-divider">
                              <img
                                alt="profile-icon"
                                src={require("../../../assets/img/icons/single-01.svg")}
                                className="mr-2"
                              />
                            </div>{" "}
                            <div>
                              <span className="hello-user" id="center-logo">
                                Profile
                              </span>
                            </div>
                          </div>
                        </Button>
                      </Link>
                    </NavItem>
                    <NavItem className="nav-button">
                      <Link>
                        <Button
                          color="secondary"
                          outline
                          block
                          type="button"
                          className="nav-button-item"
                          onClick={userLogOut}
                        >
                          <div className="center-logo">
                            <div className="logo-divider">
                              <img
                                alt="logout-icon"
                                src={require("../../../assets/img/icons/lock.svg")}
                                className="mr-2"
                              />
                            </div>
                            <div>
                              {" "}
                              <span className="hello-user" id="center-logo">
                                Logout
                              </span>
                            </div>
                          </div>
                        </Button>
                      </Link>
                    </NavItem>
                  </Container>
                </Container>
                <div className="button-container mb-4">
                  <div className="full-width ml-3 mr-3">
                    <hr className="ml-3 mr-3 mb-3 mt-2" />
                  </div>
                  <Button
                    color="primary"
                    className="align-items-center"
                    onClick={() => passedDownToggleNewPlantForm()}
                  >
                    <i className="ni ni-fat-add"></i>
                    <span id="main-cta">Add New Goal</span>
                  </Button>
                </div>
              </Card>
            </Col>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainNav;
