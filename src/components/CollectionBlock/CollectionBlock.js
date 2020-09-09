import React from "react";
import { Route } from "react-router-dom";

import "./CollectionBlock.css";

import {
  Card,
  Button,
  CardImg,
  NavItem,
  NavLink,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const CollectionBlock = (props) => {
  const {
    collectionId,
    collectionName,
    collectionPlants,
    collectionDescription,
    passedDownToggleCollectionDetailsOn,
  } = props;

  let Redirect = () => {
    window.history.pushState(
      { collectionId },
      "",
      `/app/collections/${collectionId}`
    );
  };

  return (
    <>
      {collectionPlants ? (
        <Card className="collection-container shadow">
          <CardImg
            top
            width="100%"
            id="collection-block-image"
            alt="Card image cap"
            src={require("../../assets/img/brand/fancy-plants.png")}
          />
          <CardBody className="py-0">
            <CardText>{collectionName}</CardText>
            <CardTitle>{collectionDescription}</CardTitle>
            <div className="flex-center">
              <Button
                className="my-1 mx-2 flex-center main-cta"
                color="primary"
              >
                <i className="ni ni-fat-add"></i>
                <span>Plant</span>
              </Button>
              <NavItem id="collection-block-nav-button">
                <NavLink
                  className="nav-link-icon"
                  to={`/app/collections/${collectionId}`}
                  tag={Route}
                >
                  <Button
                    className="my-1 mx-2 secondary-cta"
                    onClick={() => {
                      passedDownToggleCollectionDetailsOn();
                      Redirect();
                    }}
                  >
                    <span>Details</span>
                  </Button>
                </NavLink>
              </NavItem>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="collection-container shadow">
          <CardImg
            top
            width="100%"
            alt="Card image cap"
            src={collectionPlants}
          />
          <CardBody>
            <CardText>{collectionDescription}</CardText>
            <CardTitle>{collectionName}</CardTitle>
            <div className="flex-center">
              <Button
                className="my-1 mx-2 flex-center main-cta"
                color="primary"
              >
                <i className="ni ni-fat-add"></i>
                <span>Plant</span>
              </Button>
              <Button
                className="my-1 mx-2 secondary-cta"
                onClick={() => passedDownToggleCollectionDetailsOn()}
              >
                <span>Details</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default CollectionBlock;
