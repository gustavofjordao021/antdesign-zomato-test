import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import MainNav from "../Navbar/MainNav/MainNav";

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
        const { username, email } = currentUser;
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
                  <Col className="p-0 flex-container main-container full-height full-width">
                    <Card className="full-width full-height bg-secondary shadow main-container">
                      <CardHeader className="bg-white border-0 full-width">
                        <Row className="align-items-center">
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
                        </Row>
                      </CardHeader>
                      <Card>
                        <CardBody>
                          <Form>
                            <h6 className="heading-small text-muted mb-4">
                              User information
                            </h6>
                            <div className="pl-lg-4">
                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-username"
                                    >
                                      Username
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      id="input-username"
                                      placeholder={username}
                                      type="text"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-email"
                                    >
                                      Email address
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      id="input-email"
                                      placeholder={email}
                                      type="email"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-first-name"
                                    >
                                      First name
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      defaultValue="Lucky"
                                      id="input-first-name"
                                      placeholder="First name"
                                      type="text"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg="6">
                                  <FormGroup>
                                    <label
                                      className="form-control-label"
                                      htmlFor="input-last-name"
                                    >
                                      Last name
                                    </label>
                                    <Input
                                      className="form-control-alternative"
                                      defaultValue="Jesse"
                                      id="input-last-name"
                                      placeholder="Last name"
                                      type="text"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </div>
                            <hr className="my-4" />
                            {/* Description */}
                            <h6 className="heading-small text-muted mb-4">
                              About me
                            </h6>
                            <div className="pl-lg-4">
                              <FormGroup>
                                <label>About Me</label>
                                <Input
                                  className="form-control-alternative"
                                  placeholder="A few words about you ..."
                                  rows="4"
                                  defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                                  type="textarea"
                                />
                              </FormGroup>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
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
