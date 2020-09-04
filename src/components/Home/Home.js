import React from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../context/index";
import HomeNavBar from "../Navbar/HomeNavBar/HomeNavBar";

import "./Home.css";

import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/app" />
            ) : (
              <>
                <div>
                  <header>
                    <HomeNavBar />
                  </header>
                </div>
                <Container className="home-container">
                  <Row id="main-row">
                    <Col className="mt-4 ml-3 mr-4 mb-4">
                      <Card className="shadow">
                        <h1 id="hero-title" className="ml-4 mt-4 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </h1>
                        <CardBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Velit laoreet id donec ultrices
                            tincidunt. Mattis enim ut tellus elementum sagittis
                            vitae et.
                          </p>

                          <Link to="/signup">
                            <Button
                              className="mt-2 mr-2 mb-2 main-cta"
                              color="primary"
                            >
                              <span className="m-4">Start for free</span>
                            </Button>
                          </Link>
                          <Link to="/login">
                            <Button
                              className="mt-2 mr-2 mb-2 secondary-cta"
                              color="link"
                            >
                              <span className="m-4">Login now</span>
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="m-4">
                      <img
                        id="hero-image"
                        src={require("../../assets/img/brand/home-hero.svg")}
                        alt="brand-logo"
                      />
                    </Col>
                  </Row>
                </Container>
              </>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Home;
