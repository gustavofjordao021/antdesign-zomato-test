import React from "react";

import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const CollectionBlock = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CollectionBlock;
