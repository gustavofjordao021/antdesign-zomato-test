import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import NewPlant from "../NewPlant/NewPlant";
import MainNav from "../Navbar/MainNav/MainNav";

import "./ApplicationHome.css";

import { Row, Col, Card, Button } from "reactstrap";

class ApplicationHome extends Component {
  state = {
    isNewPlantFormVisible: false,
  };

  toggleNewPlantFormOn = () => {
    this.setState((prevState) => ({
      ...prevState,
      isNewPlantFormVisible: true,
    }));
  };

  toggleNewPlantFormOff = () => {
    this.setState((prevState) => ({
      ...prevState,
      isNewPlantFormVisible: false,
    }));
  };

  render() {
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
                  <Row className="app-container">
                    <MainNav
                      userLoggedIn={currentUser}
                      passedDownToggleNewPlantForm={() =>
                        this.toggleNewPlantFormOn()
                      }
                    />
                    <Col className="p-0 main-container">
                      <Card className="fixed-height main-container bg-secondary">
                        {this.state.isNewPlantFormVisible ? (
                          <NewPlant
                            isDone={this.toggleNewPlantFormOff}
                            isOpen={this.state.isNewPlantFormVisible}
                          />
                        ) : (
                          <>
                            <span className="text-center m-4">
                              <p className="text-muted card-text">
                                Select a goal on the left, or click below to
                                create a new goal
                              </p>
                              <Button
                                id="secondary-goal-add"
                                color="secondary"
                                className="align-items-center title"
                                onClick={() => this.toggleNewPlantFormOn()}
                              >
                                <span id="main-cta">Add New Goal</span>
                              </Button>
                            </span>
                          </>
                        )}
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
  }
}

export default ApplicationHome;
