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
      {collectionPlants.length <= 0 ? (
        <Card className="collection-container shadow">
          <CardImg
            top
            width="100%"
            id="collection-block-image"
            alt="Card image cap"
            src={require("../../assets/img/brand/generic_plant.png")}
          />
          <CardBody className="py-0">
            <CardText>{collectionDescription}</CardText>
            <CardTitle>{collectionName}</CardTitle>
            <div className="flex-center">
              <Button className="my-1 mx-2 flex-center" color="primary">
                <i className="ni ni-fat-add"></i>
                <span>Plant</span>
              </Button>
              <Button className="my-1 mx-2" color="danger">
                <span>Delete</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Card className="collection-container shadow">
          <CardImg
            top
            width="100%"
            alt="Card image cap"
            src={collectionPlants.plantPicture}
          />
          <CardBody>
            <CardText>{collectionDescription}</CardText>
            <CardTitle>{collectionName}</CardTitle>
            <div className="flex-center">
              <Button className="my-1 mx-2" color="primary">
                Primary
              </Button>
              <Button className="my-1 mx-2" color="secondary">
                Primary
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default CollectionBlock;
