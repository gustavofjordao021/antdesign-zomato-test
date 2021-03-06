import React from "react";
import "./Footer.css";

import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="mb-4">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted pl-4">
                © 2020 Flor
              </div>
            </Col>
            <Col xl="6">
              <div className="copyright text-xl-right text-muted pl-4 text-size">
                <b>
                  Made with{" "}
                  <span id="goal-list" role="img" aria-label="love">
                    💚
                  </span>
                </b>{" "}
                by Gustavo Jordão at{" "}
                <a href="https://www.ironhack.com/en/web-development/miami">
                  Ironhack Miami
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
