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
    const { plantName, plantPicture, plantDate } = this.state;
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
                      <p className="mb-0 text-muted">
                        To create your new goal, please input its name, a target
                        value (could be X books read, or % change in body
                        weight), and a due date to make sure you follow-through.
                      </p>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form
                      onSubmit={(e) =>
                        this.handleNewPlantSubmit(e, currentUser, syncUser)
                      }
                    >
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-label p-1 text-center">
                              Plant name
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="pl-2"
                            id="plantName"
                            name="plantName"
                            type="text"
                            placeholder=" Example: Read more books"
                            value={plantName}
                            onChange={this.onChangeHandler}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-label p-1 text-center">
                              Due date
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
                      {/* <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText className="input-label p-2 text-center">
                              Goal target
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="pl-2"
                            id="goalTarget"
                            name="goalTarget"
                            type="text"
                            placeholder="Example: 10 books 📚read"
                            value={goalTarget}
                            onChange={this.onChangeHandler}
                          />
                        </InputGroup>
                      </FormGroup> */}
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
