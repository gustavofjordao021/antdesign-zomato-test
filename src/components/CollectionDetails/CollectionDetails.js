import React, { useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import { AuthContext } from "../../context/index";
import PLANT_SERVICE from "../../services/PlantService";
import COLLECTION_SERVICE from "../../services/CollectionService";
import CollectionCard from "./CollectionCard/CollectionCard";

import "./CollectionDetails.css";

import { Col, Row, Card } from "reactstrap";

const CollectionDetails = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        {
          /* console.log({ collectionId }); */
        }
        {
          /* useEffect(() =>
          COLLECTION_SERVICE.retrieveCollections(collectionId).then().catch()
        ); */
        }
        return (
          <>
            {!isLoggedIn ? (
              <>
                <Redirect to="/signup" />
              </>
            ) : (
              <>
                <Row className="flex-center full-height">
                  <Col className="p-0 flex-container main-container full-height full-width">
                    <Card className="full-height bg-secondary shadow main-container">
                      <CollectionCard />
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
};

export default CollectionDetails;
