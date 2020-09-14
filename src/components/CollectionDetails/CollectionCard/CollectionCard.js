import React from "react";

import "./CollectionCard.css";

import { Row, Col, Card, Form, Input, CardBody, FormGroup } from "reactstrap";

const CollectionCard = (props) => {
  const { collectionInfo } = props;
  return (
    <Card className="m-5">
      <CardBody>
        <Form>
          <h6 className="heading-small text-muted mb-4">User information</h6>
          <div>
            <Row>
              <Col>
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Username
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={"Test"}
                    id="input-username"
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label className="form-control-label" htmlFor="input-email">
                    Email address
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-email"
                    defaultValue={"Test"}
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    First name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={"Test"}
                    id="input-first-name"
                    placeholder="First name"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="input-last-name"
                  >
                    Last name
                  </label>
                  <Input
                    className="form-control-alternative"
                    defaultValue={"Test"}
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
          <h6 className="heading-small text-muted mb-4">About me</h6>
          <div>
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
  );
};

export default CollectionCard;
