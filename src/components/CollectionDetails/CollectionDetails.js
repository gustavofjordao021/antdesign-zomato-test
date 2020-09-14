import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import CollectionCard from "./CollectionCard/CollectionCard";
import { AuthContext } from "../../context/index";
// import PLANT_SERVICE from "../../services/PlantService";
import COLLECTION_SERVICE from "../../services/CollectionService";

import "./CollectionDetails.css";

import { Col, Row, Card } from "reactstrap";

const CollectionDetails = (props) => {
  const [collectionInfo, setCollectionInfo] = useState("");
  let { collectionId } = useParams();

  useEffect(() => {
    COLLECTION_SERVICE.retrieveCollectionDetails(collectionId)
      .then(async (collection) => {
        await setCollectionInfo(collection.data);
      })
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        return (
          <>
            {!isLoggedIn ? (
              <>
                <Redirect to="/signup" />
              </>
            ) : (
              <>
                <Row className="flex-center full-height">
                  {console.log(collectionInfo)}
                  <Col className="p-0 flex-container main-container full-height full-width">
                    <Card className="full-height bg-secondary shadow main-container">
                      <div>
                        {" "}
                        <div>{collectionInfo.collectionName}</div>
                        <div>{collectionInfo.collectionDescription}</div>
                      </div>
                      {/* <CollectionCard collectionInfo={collectionInfo} /> */}
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
