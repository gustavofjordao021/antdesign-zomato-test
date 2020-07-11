import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import NewPlant from "../NewPlant/NewPlant";
import GoalSlider from "../GoalSlider/GoalSlider";
import UserNavBar from "../Navbar/UserNavBar/UserNavBar";

import "./ApplicationHome.css";

import { Row, Col, Card, Button } from "reactstrap";

class ApplicationHome extends Component {
  state = {
    isGoalFormVisible: false,
  };

  toggleGoalFormOn = () => {
    this.setState((prevState) => ({
      ...prevState,
      isGoalFormVisible: true,
    }));
  };

  toggleGoalFormOff = () => {
    this.setState((prevState) => ({
      ...prevState,
      isGoalFormVisible: false,
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
                    <GoalSlider
                      userLoggedIn={currentUser}
                      passedDownToggleGoalForm={() => this.toggleGoalFormOn()}
                    />
                    <Col className="p-0 main-container">
                      <Card className="fixed-height main-container bg-secondary">
                        {this.state.isGoalFormVisible ? (
                          <NewPlant
                            isDone={this.toggleGoalFormOff}
                            isOpen={this.state.isGoalFormVisible}
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
                                onClick={() => this.toggleGoalFormOn()}
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
