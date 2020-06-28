import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import UserNavbar from "../Navbar/HomeNavBar/HomeNavBar";

import "./Login.css";

import {
  Row,
  Col,
  Card,
  Form,
  Alert,
  Input,
  Button,
  CardBody,
  Container,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

const Login = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const {
          formLogin: { username, password },
          isLoggedIn,
          errorMessage,
          successMessage,
        } = context.state;

        const {
          handleGoogle,
          handleFacebook,
          handleLoginInput,
          handleLoginSubmit,
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
                    <CardBody className="px-lg-4 py-lg-4">
                      <div className="text-center mb-2">
                        <p>Login</p>
                        <Button
                          color="secondary"
                          className="login-button-text mb-2"
                          onClick={handleGoogle}
                        >
                          <img
                            className="login-button-logo"
                            alt="login-button-logo"
                            src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg"
                          />
                          Continue with Google
                        </Button>
                        <Button
                          color="secondary"
                          className="login-button-text m-0"
                          onClick={handleFacebook}
                        >
                          <img
                            className="login-button-logo"
                            alt="login-button-logo"
                            src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg"
                          />
                          Continue with Facebook
                        </Button>
                      </div>
                      <div className="middle-separator">
                        <div className="text-center my-4 separator"></div>
                        <span className="px-3">OR</span>
                        <div className="text-center my-4 separator"></div>
                      </div>
                      <Form onSubmit={handleLoginSubmit}>
                        <FormGroup className="mb-1">
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
                              onChange={handleLoginInput}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-1">
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
                              onChange={handleLoginInput}
                            />
                          </InputGroup>
                        </FormGroup>
                        <Row className="my-3">
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
                                <span className="text-muted">Remember me</span>
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
                        <div className="text-center">
                          <Button
                            className="my-2 login-button-cta"
                            color="primary"
                            type="submit"
                          >
                            Login
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

export default Login;
