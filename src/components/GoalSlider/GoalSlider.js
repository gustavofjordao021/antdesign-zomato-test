import React from "react";
import { Link } from "react-router-dom";

import "./GoalSlider.css";

import { Col, Card, Button, NavItem, Container } from "reactstrap";

const GoalSlider = (props) => {
  const { userLoggedIn, passedDownToggleGoalForm } = props;

  return (
    <>
      <Col className="p-0 fixed-height navbar-vertical" id="overflow-nav">
        <Card
          className="fixed-height bg-secondary shadow column-container"
          id="nav-content"
        >
          <Container className="goal-container">
            <Link to="/app" className="navbar-nav navbar-brand">
              <div className="center-logo">
                <img
                  alt="reversed logo"
                  src={require("../../assets/img/brand/logo-goalify.svg")}
                  className="mr-2"
                />{" "}
                <span className="hello-user" id="center-logo">
                  Goalify
                </span>
              </div>
            </Link>{" "}
            {userLoggedIn ? (
              <>
                <NavItem className="mr-3">
                  <Link
                    to={"/app/user-profile"}
                    className="hello-user text-muted"
                  >
                    Welcome,
                    <span>
                      <img
                        src={userLoggedIn.avatar}
                        className="avatar-sm rounded-circle m-2"
                        alt="user-logo"
                      />
                    </span>
                    <b>{userLoggedIn.username}</b>
                  </Link>
                </NavItem>
              </>
            ) : (
              <span></span>
            )}
            <NavItem>
              <Link to={"/app/user-profile"}>
                <Button color="default" type="button">
                  Profile
                </Button>
              </Link>
            </NavItem>
          </Container>
          <div className="button-container mb-4">
            <div className="full-width ml-3 mr-3">
              <hr className="ml-3 mr-3 mb-3 mt-2" />
            </div>
            <Button
              color="primary"
              className="align-items-center"
              onClick={() => passedDownToggleGoalForm()}
            >
              <i className="ni ni-fat-add"></i>
              <span id="main-cta">Add New Goal</span>
            </Button>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default GoalSlider;
