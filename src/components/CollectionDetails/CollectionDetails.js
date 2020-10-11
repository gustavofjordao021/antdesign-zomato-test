import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import PlantBlock from "../PlantBlock/PlantBlock";
import NewPlant from "../NewPlant/NewPlant";
import { AuthContext } from "../../context/index";
import COLLECTION_SERVICE from "../../services/CollectionService";

import "./CollectionDetails.css";

import { Col, Row, Card, Button } from "reactstrap";

const CollectionDetails = () => {
  const [collectionData, setCollectionData] = useState({
    collectionId: useParams().collectionId,
    collectionInfo: "",
  });

  // const [EditCollectionMode, setEditCollectionMode] = useState(false);

  const [AddPlantMode, setAddPlantMode] = useState(false);

  useEffect(() => {
    COLLECTION_SERVICE.retrieveCollectionDetails(collectionData.collectionId)
      .then(async (returnedCollection) => {
        await setCollectionData({
          collectionId: "",
          collectionInfo: returnedCollection.data,
        });
      })
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        const {
          collectionName,
          collectionDescription,
          collectionPlants,
        } = collectionData.collectionInfo;
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
                      <div className="flex-center m-2" id="collection-header">
                        {" "}
                        <div className="m-2">
                          <h2 className="hello-user">{collectionName}</h2>
                        </div>
                        <div className="m-2">{collectionDescription}</div>
                        <div className="flex-center m-2">
                          <Button
                            className="my-1 mx-2 flex-center main-cta"
                            color="primary"
                            onClick={() => setAddPlantMode(true)}
                          >
                            <i className="ni ni-fat-add"></i>
                            <span>Plant</span>
                          </Button>
                          <Button
                            className="my-1 mx-2 secondary-cta"
                            //   onClick={() => setEditCollectionMode(true)}
                          >
                            <span>Edit</span>
                          </Button>
                        </div>
                        {AddPlantMode ? (
                          <>
                            <NewPlant
                              isOpen={AddPlantMode}
                              isDone={setAddPlantMode}
                              collectionId={collectionData.collectionInfo._id}
                            />
                          </>
                        ) : (
                          ""
                        )}
                        {collectionPlants ? (
                          <div className="card-columns">
                            {collectionPlants.map((plant, key) => (
                              <PlantBlock plantKey={key} plantInfo={plant} />
                            ))}
                          </div>
                        ) : (
                          <span></span>
                        )}
                      </div>
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
