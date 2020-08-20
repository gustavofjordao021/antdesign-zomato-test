import React, { Component } from "react";

import ReactDatetime from "react-datetime";
import PLANT_SERVICE from "../../services/PlantService";
import { AuthContext } from "../../context/index";

import "../NewPlant/NewPlant.css";

import {
  Card,
  Form,
  Alert,
  Input,
  Modal,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";

const DEFAULT_STATE = {
  plantName: "",
  plantPicture: "",
  plantFileName: "",
  plantImageUploaded: false,
  plantDate: "",
};

class newPlantForm extends Component {
  state = {
    ...DEFAULT_STATE,
    errorMessage: "",
    successMessage: "",
  };

  toggleFormOff = () => {
    this.props.isDone();
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onTimeChangeHandler = (event) => {
    console.log(event._d);
    this.setState({ plantDate: event._d });
  };

  handlePlantImageUpload = (e) => {
    e.persist();
    const uploadData = new FormData();
    uploadData.append("plantImage", e.target.files[0]);
    PLANT_SERVICE.uploadPlantImage(uploadData)
      .then((responseFromServer) => {
        console.log(responseFromServer.data.secure_url);
        this.setState((prevState) => ({
          ...prevState,
          plantPicture: responseFromServer.data.secure_url,
          plantFileName: e.target.files[0].name,
          plantImageUploaded: true,
        }));
        console.log(this.state);
      })
      .catch();
  };

  handleNewPlantSubmit = (e, user, cb, toggle) => {
    e.preventDefault();
    PLANT_SERVICE.newPlant({
      ...this.state,
      plantOwner: user._id,
    })
      .then((responseFromServer) => {
        const { currentUser } = responseFromServer.data;
        cb(currentUser);
        const {
          data: { errorMessage },
        } = responseFromServer;
        if (errorMessage) {
          this.setState({
            ...DEFAULT_STATE,
            errorMessage,
            displayForm: this.props.isShown,
          });
        }
        this.props.isDone(this.state.isDone);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState((prevState) => ({
            ...prevState,
            errorMessage: err.response.data.message,
          }));
        }
      });
  };

  render() {
    const {
      plantName,
      plantPicture,
      plantFileName,
      plantImageUploaded,
    } = this.state;
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser, successMessage, errorMessage } = context.state;
          const { syncUser } = context;
          return (
            <>
              <Modal
                classNamem="modal-dialog-centered"
                isOpen={this.props.isOpen}
              >
                <Card
                  id="new-goal-form"
                  className="bg-secondary shadow border-0 "
                >
                  <CardHeader className="bg-transparent brand-logo">
                    <div className="text-center">
                      <h2 className="title">Add your plant</h2>
                      <p className="mb-0 text-muted line-height-adjust">
                        Add your new plant information below. We'll use its
                        image to help you identify and take care of it!
                      </p>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-4">
                    <Form
                      onSubmit={(e) =>
                        this.handleNewPlantSubmit(e, currentUser, syncUser)
                      }
                    >
                      <div className="plant-image-container mb-4">
                        <img
                          alt="plantImage"
                          className="rounded-circle plant-image shadow"
                          src={
                            !plantImageUploaded
                              ? require("../../assets/img/brand/generic_plant.png")
                              : plantPicture
                          }
                        />
                      </div>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-group-text custom-spacing">
                              <i className="ni ni-tag" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="pl-2"
                            id="plantName"
                            name="plantName"
                            type="text"
                            placeholder="Thyme after thyme"
                            value={plantName}
                            onChange={this.onChangeHandler}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-group-text custom-spacing">
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Adoption date",
                            }}
                            onChange={this.onTimeChangeHandler}
                            timeFormat={false}
                          />
                        </InputGroup>
                      </FormGroup>
                      {!plantImageUploaded ? (
                        <>
                          <FormGroup>
                            <InputGroup className="input-group-alternative display-flex">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText className="input-group-text custom-spacing">
                                  <i className="ni ni-cloud-upload-96" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                id="plantImage"
                                name="plantImage"
                                type="file"
                                className="custom-file-input"
                                placeholder="plantImage"
                                onChange={(e) => this.handlePlantImageUpload(e)}
                              ></Input>
                              <p
                                className="text-muted input-text"
                                id="input-text"
                              >
                                Select plant image
                              </p>
                            </InputGroup>
                          </FormGroup>
                        </>
                      ) : (
                        <>
                          <FormGroup>
                            <InputGroup className="input-group-alternative display-flex">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText className="input-group-text custom-spacing">
                                  <i className="ni ni-cloud-upload-96" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                id="plantImage"
                                name="plantImage"
                                type="file"
                                className="custom-file-input"
                                placeholder="plantImage"
                                onChange={(e) => this.handlePlantImageUpload(e)}
                              ></Input>
                              <p className="text-muted input-text">
                                {plantFileName}
                              </p>
                            </InputGroup>
                          </FormGroup>
                        </>
                      )}
                      {errorMessage ? (
                        <Alert color="danger">{errorMessage}</Alert>
                      ) : successMessage ? (
                        <Alert color="success">{successMessage}</Alert>
                      ) : (
                        <span></span>
                      )}
                      <div className="text-center">
                        <Button
                          className="mt-2 ml-2 mb-2"
                          color="primary"
                          type="submit"
                        >
                          Add plant
                        </Button>
                        <Button
                          className="mt-2 mr-2 mb-2 cancel-link"
                          color="secondary"
                          onClick={() => this.toggleFormOff()}
                        >
                          <span className="m-4">Cancel</span>
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Modal>
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default newPlantForm;
