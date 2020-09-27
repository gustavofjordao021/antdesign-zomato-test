import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/index";

import MainNav from "../Navbar/MainNav/MainNav";
import UserProfile from "../UserProfile/UserProfile";
import NewCollection from "../NewCollection/NewCollection";
import CollectionBlock from "../CollectionBlock/CollectionBlock";
import CollectionDetails from "../CollectionDetails/CollectionDetails";

import "./ApplicationHome.css";

import { Row, Col, Card, Button, CardDeck } from "reactstrap";

const ApplicationHome = (props) => {
  const [state, setState] = useState({
    isUserProfileVisible: "",
    isCollectionDetailsVisible: "",
    isNewCollectionFormVisible: "",
  });

  const toggleCollectionDetailsOn = () => {
    setState({
      isNewCollectionFormVisible: false,
      isUserProfileVisible: false,
      isCollectionDetailsVisible: true,
    });
  };

  const toggleNewCollectionFormOn = () => {
    setState({
      isNewCollectionFormVisible: true,
      isUserProfileVisible: false,
      isCollectionDetailsVisible: false,
    });
  };

  const toggleNewCollectionFormOff = () => {
    setState({
      isNewCollectionFormVisible: false,
      isUserProfileVisible: false,
      isCollectionDetailsVisible: false,
    });
  };

  const toggleUserProfileOn = () => {
    setState({
      isNewCollectionFormVisible: false,
      isUserProfileVisible: true,
      isCollectionDetailsVisible: false,
    });
  };

  const toggleUserProfileOff = () => {
    setState({
      isNewCollectionFormVisible: false,
      isUserProfileVisible: false,
      isCollectionDetailsVisible: false,
    });
  };

  const {
    isUserProfileVisible,
    isCollectionDetailsVisible,
    isNewCollectionFormVisible,
  } = state;

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
                  <MainNav
                    userLoggedIn={currentUser}
                    passedDownToggleNewCollectionForm={
                      toggleNewCollectionFormOn
                    }
                    passedDownToggleUserProfileOn={toggleUserProfileOn}
                    passedDownToggleUserProfileOff={toggleUserProfileOff}
                    passedDownToggleCollectionDetailsOn={
                      toggleCollectionDetailsOn
                    }
                  />
                  <Col className="p-0 flex-container main-container full-height full-width">
                    {isUserProfileVisible && !isCollectionDetailsVisible ? (
                      <UserProfile />
                    ) : !isUserProfileVisible && isCollectionDetailsVisible ? (
                      <CollectionDetails />
                    ) : (
                      <Card
                        className="full-height full-width flex-container main-container bg-secondary"
                        id="card-container"
                      >
                        {isNewCollectionFormVisible ? (
                          <CardDeck className="flex-center full-width full-height">
                            <NewCollection
                              isOpen={isNewCollectionFormVisible}
                              isDone={toggleNewCollectionFormOff}
                            />
                          </CardDeck>
                        ) : currentUser.collections.length > 0 ? (
                          currentUser.collections.map((collection, id) => (
                            <CollectionBlock
                              key={id}
                              collectionId={collection._id}
                              collectionName={collection.collectionName}
                              collectionDescription={
                                collection.collectionDescription
                              }
                              collectionPlants={collection.collectionPlants}
                              passedDownToggleCollectionDetailsOn={
                                toggleCollectionDetailsOn
                              }
                            />
                          ))
                        ) : (
                          <CardDeck className="flex-center full-width full-height">
                            <span className="text-center m-4">
                              <p className="text-muted card-text">
                                Select a collection on the left, or click below
                                to create a new collection
                              </p>
                              <Button
                                id="secondary-goal-add"
                                color="secondary"
                                className="align-items-center title secondary-cta"
                                onClick={() => toggleNewCollectionFormOn()}
                              >
                                <i className="ni ni-fat-add"></i>
                                <span className="secondary-cta">
                                  Collection
                                </span>
                              </Button>
                            </span>
                          </CardDeck>
                        )}
                      </Card>
                    )}
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

export default ApplicationHome;
