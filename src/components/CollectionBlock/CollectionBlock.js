import React from "react";
import "./CollectionBlock.css";

import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const CollectionBlock = (props) => {
  const { collectionName, collectionDescription, collectionPlants } = props;
  return (
    <>
      <Card className="collection-container shadow">
        <CardImg
          top
          width="100%"
          alt="Card image cap"
          src={
            !collectionPlants
              ? require("../../assets/img/brand/generic_plant.png")
              : "test"
          }
          //   src={require("../../assets/img/brand/generic_plant.png")}
        />
        <CardBody>
          <CardTitle>{collectionName}</CardTitle>
          <CardText>{collectionDescription}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default CollectionBlock;
