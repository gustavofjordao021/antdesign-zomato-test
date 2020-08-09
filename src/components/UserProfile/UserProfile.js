import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import MainNav from "../Navbar/MainNav/MainNav";
import ProfileBlock from "../UserProfile/ProfileBlock/ProfileBlock";

import "./UserProfile.css";

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
} from "reactstrap";

const UserProfile = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { currentUser, isLoggedIn } = context.state;
        return (
          <>
            {!isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Row className="flex-center full-height">
                  <MainNav
                    userLoggedIn={currentUser}
                    passedDownToggleGoalForm={() => this.toggleGoalFormOn()}
                  />
                  <Col className="p-0 flex-container main-container full-height full-width bg-secondary">
                    <Card className="full-width full-height bg-secondary shadow main-container">
                      <CardHeader className="bg-white full-width">
                        <Row className="align-items-center flex-center">
                          <Col xs="8">
                            <h3 className="mb-0">My account</h3>
                          </Col>
                          <Col className="text-right" xs="4">
                            <Button
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              size="sm"
                            >
                              Settings
                            </Button>
                          </Col>
                          <ProfileBlock userLoggedIn={currentUser} />
                          <ProfileBlock userLoggedIn={currentUser} />
                        </Row>
                      </CardHeader>
                    </Card>
                  </Col>
                </Row>
              </>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default UserProfile;
