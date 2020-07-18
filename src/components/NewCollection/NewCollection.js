import React, { Component } from "react";

import COLLECTION_SERVICE from "../../services/CollectionService";
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
  collectionName: "",
  collectionDescription: "",
};

class newCollectionForm extends Component {
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

  handleNewCollectionSubmit = (e, user, cb, toggle) => {
    e.preventDefault();
    COLLECTION_SERVICE.newCollection({
      ...this.state,
      collectionOwner: user._id,
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
    const { collectionName, collectionDescription } = this.state;
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
                      <h2 className="title">Add a collection</h2>
                      <p className="mb-0 text-muted line-height-adjust">
                        Create a new plant collection. It can be after a
                        location in your house, or particular group of plants.
                      </p>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-4">
                    <Form
                      onSubmit={(e) =>
                        this.handleNewCollectionSubmit(e, currentUser, syncUser)
                      }
                    >
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-group-text custom-spacing">
                              <i className="ni ni-tag" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            className="pl-2"
                            id="collectionName"
                            name="collectionName"
                            value={collectionName}
                            onChange={this.onChangeHandler}
                            placeholder="Example: living room"
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-group-text custom-spacing">
                              <i className="ni ni-tag" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            row="4"
                            col="50"
                            type="text"
                            className="pl-2"
                            id="collectionDescription"
                            name="collectionDescription"
                            value={collectionDescription}
                            onChange={this.onChangeHandler}
                            placeholder="Example: Receives morning light"
                          ></Input>
                        </InputGroup>
                      </FormGroup>
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

export default newCollectionForm;
