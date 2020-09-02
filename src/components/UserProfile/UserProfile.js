import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import ProfileBlock from "../UserProfile/ProfileBlock/ProfileBlock";

import "./UserProfile.css";

import { Row, Col, Card, Button, CardHeader } from "reactstrap";

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
                  <Col className="p-0 flex-container main-container full-height full-width bg-secondary">
                    <Card className="full-width full-height bg-secondary shadow main-container">
                      <CardHeader className="bg-white full-width">
                        <Row className="align-items-center flex-center">
                          <Row className="flex-center flex-space-between full-width">
                            <h3 className="mb-0 ml-6">My account</h3>
                            <Button
                              className="mr-6"
                              color="primary"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              size="sm"
                            >
                              Settings
                            </Button>
                          </Row>
                        </Row>
                      </CardHeader>
                      <Row className="align-items-center flex-center full-width">
                        <ProfileBlock userLoggedIn={currentUser} />
                        <ProfileBlock userLoggedIn={currentUser} />
                      </Row>
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
