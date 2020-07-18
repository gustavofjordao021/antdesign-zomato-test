import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import MainNav from "../Navbar/MainNav/MainNav";
import NewCollection from "../NewCollection/NewCollection";

import "./ApplicationHome.css";

import { Row, Col, Card, Button } from "reactstrap";

class ApplicationHome extends Component {
  state = {
    // isNewPlantFormVisible: false,
    isNewCollectionFormVisible: false,
  };

  // toggleNewPlantFormOn = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     isNewPlantFormVisible: true,
  //   }));
  // };

  // toggleNewPlantFormOff = () => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     isNewPlantFormVisible: false,
  //   }));
  // };

  toggleNewCollectionFormOn = () => {
    this.setState((prevState) => ({
      ...prevState,
      isNewCollectionFormVisible: true,
    }));
  };

  toggleNewCollectionFormOff = () => {
    this.setState((prevState) => ({
      ...prevState,
      isNewCollectionFormVisible: false,
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
                      passedDownToggleNewCollectionForm={
                        this.toggleNewCollectionFormOn
                      }
                    />
                    <Col className="p-0 main-container">
                      <Card className="fixed-height main-container bg-secondary">
                        {this.state.isNewCollectionFormVisible ? (
                          <NewCollection
                            isOpen={this.state.isNewCollectionFormVisible}
                            isDone={this.toggleNewCollectionFormOff}
                          />
                        ) : (
                          <>
                            <span className="text-center m-4">
                              <p className="text-muted card-text">
                                Select a collection on the left, or click below
                                to create a new collection
                              </p>
                              <Button
                                id="secondary-goal-add"
                                color="secondary"
                                className="align-items-center title"
                                onClick={() => this.toggleNewCollectionFormOn()}
                              >
                                <i className="ni ni-fat-add"></i>
                                <span id="main-cta">Collection</span>
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
