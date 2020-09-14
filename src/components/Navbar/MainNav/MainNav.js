import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import NavOption from "../NavOption/NavOption";
import { AuthContext } from "../../../context/index";

import "./MainNav.css";

import { Col, Card, Button, Spinner, NavItem, Container } from "reactstrap";

const Weather = React.lazy(() => import("../Weather/Weather"));

const MainNav = (props) => {
  const {
    passedDownToggleUserProfileOn,
    passedDownToggleUserProfileOff,
    passedDownToggleNewCollectionForm,
    passedDownToggleCollectionDetailsOn,
  } = props;
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { userLogOut } = context;
        const { currentUser } = context.state;
        return (
          <>
            <Col className="p-0 full-height navbar-vertical" id="overflow-nav">
              <Card
                className="full-height bg-secondary shadow column-container"
                id="nav-content"
              >
                <Container id="nav-content" className="goal-container p-0">
                  <Link
                    to="/app"
                    className="navbar-nav navbar-brand"
                    onClick={() => {
                      passedDownToggleUserProfileOff();
                    }}
                  >
                    <div className="flex-center m-2">
                      <div className="logo-divider">
                        <img
                          id="brand-logo"
                          alt="reversed logo"
                          src={require("../../../assets/img/brand/logo-flor.svg")}
                          className="mr-2"
                        />
                      </div>{" "}
                      <div>
                        <span className="hello-user">Flor</span>
                      </div>
                    </div>
                  </Link>{" "}
                  <Container className="goal-container p-0">
                    <NavItem className="nav-button">
                      <NavOption
                        icon="home-52.svg"
                        page="Home"
                        linkTo="/app"
                        action={() => {
                          passedDownToggleUserProfileOff();
                        }}
                      />
                    </NavItem>
                  </Container>
                  <Container className="goal-container p-0">
                    <span className="hello-user" id="center-logo">
                      Collections
                    </span>
                    {currentUser.collections.map((collection, id) => (
                      <NavOption
                        key={id}
                        icon="folder-15.svg"
                        page={collection.collectionName}
                        linkTo={`/app/collections/${collection._id}`}
                        action={() => {
                          passedDownToggleCollectionDetailsOn();
                        }}
                      />
                    ))}
                  </Container>
                  <Container className="goal-container p-0">
                    <span className="hello-user" id="center-logo">
                      Settings
                    </span>
                    <NavItem className="nav-button"></NavItem>
                    <NavItem className="nav-button">
                      <NavOption
                        icon="single-01.svg"
                        page="Profile"
                        linkTo="/app/user-profile"
                        action={() => {
                          passedDownToggleUserProfileOn();
                        }}
                      />
                    </NavItem>
                    <NavItem className="nav-button">
                      <NavOption
                        icon="lock.svg"
                        page="Logout"
                        action={userLogOut}
                      />
                    </NavItem>
                  </Container>
                  <Suspense fallback={<Spinner />}>
                    <Weather />
                  </Suspense>
                </Container>
                <div className="button-container mb-4">
                  <div className="full-width ml-3 mr-3">
                    <hr
                      id="button-break"
                      className="pl-3 ml-3 mr-3 mb-3 mt-2"
                    />
                  </div>
                  <Button
                    color="primary"
                    className="align-items-center main-cta"
                    onClick={() => passedDownToggleNewCollectionForm()}
                  >
                    <i className="ni ni-fat-add"></i>
                    <span className="main-cta">Collection</span>
                  </Button>
                </div>
              </Card>
            </Col>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainNav;
