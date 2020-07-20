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
      <Card className="collection-container">
        <CardImg
          top
          width="100%"
          src={
            !collectionPlants
              ? "../../assets/img/brand/generic_plan.png"
              : collectionPlants
          }
          alt="Card image cap"
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
