import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import UserNavbar from "../Navbar/HomeNavBar/HomeNavBar";

import "./Signup.css";

import {
  Col,
  Row,
  Card,
  Form,
  Input,
  Alert,
  Button,
  CardBody,
  Container,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

const Signup = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formSignup: { username, email, password },
          isLoggedIn,
          errorMessage,
          avatarFileName,
          avatarUploaded,
          successMessage,
        } = context.state;

        const {
          handleGoogle,
          handleFacebook,
          handleSignupInput,
          handleSignupSubmit,
          handleAvatarUpload,
        } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/app" />
            ) : (
              <>
                <UserNavbar />
                <Container id="signup-container">
                  <Card
                    id="signup-card"
                    className="bg-secondary shadow border-0 "
                  >
                    <CardBody className="px-lg-4 py-lg-2">
                      <div className="text-center mb-2">
                        <p>Sign up</p>
                        <Button
                          color="secondary"
                          className="login-button-text mb-2 secondary-cta"
                          onClick={handleGoogle}
                        >
                          <img
                            className="login-button-logo"
                            alt="login-button-logo"
                            src={require("../../assets/img/brand/google-41de20.svg")}
                          />
                          Continue with Google
                        </Button>
                        <Button
                          color="secondary"
                          className="login-button-text m-0 secondary-cta"
                          onClick={handleFacebook}
                        >
                          <img
                            className="login-button-logo"
                            alt="login-button-logo"
                            src={require("../../assets/img/brand/facebook-fadd25.svg")}
                          />
                          Continue with Facebook
                        </Button>
                      </div>
                      <div className="middle-separator">
                        <div className="text-center my-4 separator"></div>
                        <span className="px-3">OR</span>
                        <div className="text-center my-4 separator"></div>
                      </div>
                      <Form onSubmit={handleSignupSubmit}>
                        <FormGroup className="mb-0">
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="username"
                              name="username"
                              type="text"
                              value={username}
                              placeholder="Username"
                              autoComplete="username"
                              onChange={handleSignupInput}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-0">
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={email}
                              placeholder="Email"
                              autoComplete="email"
                              onChange={handleSignupInput}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              id="password"
                              name="password"
                              type="password"
                              value={password}
                              placeholder="Password"
                              autoComplete="current-password"
                              onChange={handleSignupInput}
                            />
                          </InputGroup>
                        </FormGroup>
                        {!avatarUploaded ? (
                          <>
                            <FormGroup>
                              <InputGroup className="input-group-alternative display-flex">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText className="input-group-text custom-spacing">
                                    <i className="ni ni-cloud-upload-96" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  id="avatar"
                                  name="avatar"
                                  type="file"
                                  className="custom-file-input"
                                  placeholder="avatar"
                                  onChange={(e) => handleAvatarUpload(e)}
                                ></Input>
                                <p className="text-muted input-text">
                                  Select Avatar file
                                </p>
                              </InputGroup>
                            </FormGroup>
                          </>
                        ) : (
                          <>
                            <FormGroup>
                              <InputGroup className="input-group-alternative display-flex">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText className="input-group-text custom-spacing">
                                    <i className="ni ni-cloud-upload-96" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  id="avatar"
                                  name="avatar"
                                  type="file"
                                  className="custom-file-input"
                                  placeholder="avatar"
                                  onChange={(e) => handleAvatarUpload(e)}
                                ></Input>
                                <p className="text-muted input-text">
                                  {avatarFileName}
                                </p>
                              </InputGroup>
                            </FormGroup>
                          </>
                        )}
                        <Row className="my-1">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span className="text-muted">
                                  I agree with the{" "}
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        {errorMessage ? (
                          <Alert color="danger">{errorMessage}</Alert>
                        ) : successMessage ? (
                          <Alert color="success">{successMessage}</Alert>
                        ) : (
                          <span></span>
                        )}
                        <div
                          className="text-center mt-4 mb-3"
                          id="signup-container"
                        >
                          <Button
                            color="primary"
                            type="submit"
                            className="login-button-cta main-cta"
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Container>
              </>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Signup;
