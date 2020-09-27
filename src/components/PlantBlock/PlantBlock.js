import React from "react";

import "./PlantBlock.css";

import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const PlantBlock = (props) => {
  const {
    collectionName,
    collectionPlants,
    collectionDescription,
    passedDownToggleCollectionDetailsOn,
  } = props;

  return (
    <>
      <Card className="collection-container shadow">
        <CardImg top width="100%" alt="Card image cap" src={collectionPlants} />
        <CardBody>
          <CardText>{collectionDescription}</CardText>
          <CardTitle>{collectionName}</CardTitle>
          <div className="flex-center">
            <Button className="my-1 mx-2 flex-center main-cta" color="primary">
              <i className="ni ni-fat-add"></i>
              <span>Plant</span>
            </Button>
            <Button
              className="my-1 mx-2 secondary-cta"
              onClick={() => {
                passedDownToggleCollectionDetailsOn();
              }}
            >
              <span>Details</span>
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default PlantBlock;
