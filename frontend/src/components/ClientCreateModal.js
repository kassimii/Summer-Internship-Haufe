import React, { useState } from "react";
import { connect } from "react-redux";
import { store } from "../redux/store";
import {
  Modal,
  InputGroup,
  FormControl,
  Form,
  ListGroup,
  Card,
  Alert,
  Button,
  Accordion
} from "react-bootstrap";

import { useHttpClient } from "../hooks/http-hook";
import { createClient, getClients } from "../redux/actions/index";

const initialClient = {
  name: "",
  group_id: "7da27e15-0f58-4346-9e3e-c15eea578994",
  user_id: "a261f996-7085-46ee-b8da-c46929bc5e7c",
  advancedSettingClients: [],
  attributeMappings: []
};

const initialErrors = {
  name: false,
  setting: { empty: false, exists: false },
  attributeMappings: { empty: false, exists: false }
};

function CreateClientModal({ id, createClient, getClients }) {
  const { sendRequest } = useHttpClient();

  const [modalShow, setModalShow] = useState(false);
  const [client, setClient] = useState(initialClient);
  const [errors, setErrors] = useState(initialErrors);
  const [currentSetting, setCurrentSetting] = useState({
    key: "",
    value: ""
  });
  const [currentAttribute, setCurrentAttribute] = useState({
    key: "",
    value: ""
  });

  const handleClose = () => {
    setClient(initialClient);
    setCurrentSetting({ key: "", value: "" });
    setCurrentAttribute({ key: "", value: "" });
    setErrors(initialErrors);
    setModalShow(false);
  };

  const handleShow = () => {
    setModalShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (client.name === "") {
      setErrors({ ...errors, name: true });
      return;
    }
    if (!id) {
      createClient(client, sendRequest);
    } else {
      setErrors({ ...errors, id: true });
      return;
    }

    const unsubscribe = store.subscribe(() => {
      unsubscribe();
      getClients(sendRequest, "");
      handleClose();
    });
  };
  function handleChange({ target }) {
    if (target.name === "name") {
      setErrors({ ...errors, name: false });
      setClient({ ...client, [target.name]: target.value });
    } else {
      setClient({
        ...client,
        [target.name]: [...client[target.name], target.value]
      });
    }
  }

  const handleSetting = () => {
    let fieldExists = false;
    if (currentSetting.key === "" || currentSetting.value === "") {
      setErrors({ ...errors, setting: { empty: true, exists: false } });
      return;
    }
    client.advancedSettingClients.forEach((setting) => {
      if (currentSetting.key === setting.key) {
        fieldExists = true;
        return;
      }
    });
    if (fieldExists) {
      setErrors({ ...errors, setting: { empty: false, exists: true } });
      setCurrentSetting({ key: "", value: "" });
      return;
    }
    setErrors({ ...errors, setting: { empty: false, exists: false } });
    handleChange({
      target: { name: "advancedSettingClients", value: currentSetting }
    });
    setCurrentSetting({ key: "", value: "" });
  };

  const deleteSetting = (event) => {
    let newSettings = client.advancedSettingClients.filter((setting) => {
      return setting.key !== event.target.value;
    });
    setClient({ ...client, advancedSettingClients: newSettings });
  };

  const handleAttribute = () => {
    let fieldExists = false;
    if (currentAttribute.key === "" || currentAttribute.value === "") {
      setErrors({
        ...errors,
        attributeMappings: { empty: true, exists: false }
      });
      return;
    }
    client.attributeMappings.forEach((att) => {
      if (currentAttribute.key === att.key) {
        fieldExists = true;
        return;
      }
    });
    if (fieldExists) {
      setErrors({
        ...errors,
        attributeMappings: { empty: false, exists: true }
      });
      setCurrentAttribute({ key: "", value: "" });
      return;
    }
    setErrors({
      ...errors,
      attributeMappings: { empty: false, exists: false }
    });
    handleChange({
      target: { name: "attributeMappings", value: currentAttribute }
    });
    setCurrentAttribute({ key: "", value: "" });
  };

  const deleteAttribute = (event) => {
    let newAttribute = client.attributeMappings.filter((att) => {
      return att.key !== event.target.value;
    });
    setClient({ ...client, attributeMappings: newAttribute });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Client
      </Button>

      <Modal
        onHide={handleClose}
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Provide info for new Client
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label className="font-weight-bold">
                <li>Name</li>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter a name"
                value={client.name}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a client name
              </Form.Control.Feedback>
            </Form.Group>
            <Accordion>
              {/* advancedSettingClients  */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <li className="font-weight-bold">
                      Default settings and flags
                    </li>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form.Group>
                      <InputGroup className="mb-3">
                        <FormControl
                          name="key"
                          type="text"
                          placeholder="Add a key"
                          value={currentSetting.key}
                          onChange={(event) =>
                            setCurrentSetting({
                              ...currentSetting,
                              [event.target.name]: event.target.value.trim()
                            })
                          }
                          isInvalid={
                            errors.setting.empty || errors.setting.exists
                          }
                        />
                        <FormControl
                          name="value"
                          type="text"
                          placeholder="Add a value"
                          value={currentSetting.value}
                          onChange={(event) =>
                            setCurrentSetting({
                              ...currentSetting,
                              [event.target.name]: event.target.value.trim()
                            })
                          }
                          isInvalid={
                            errors.setting.empty || errors.setting.exists
                          }
                        />
                        <InputGroup.Append>
                          <Button
                            name="advancedSettingClients"
                            variant="outline-success"
                            onClick={handleSetting}
                          >
                            Add the setting
                          </Button>
                        </InputGroup.Append>
                        <Form.Control.Feedback type="invalid">
                          {errors.setting.empty ? (
                            <span>Please provide a key and a value</span>
                          ) : (
                            <span>Setting with this key exists</span>
                          )}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center">
                      {client.advancedSettingClients.length === 0 ? (
                        <Alert variant="danger">
                          No setting or flags added yet
                        </Alert>
                      ) : (
                        <ListGroup>
                          {client.advancedSettingClients.map((setting) => (
                            <ListGroup.Item
                              key={setting.key}
                              className="d-flex"
                            >
                              <span className="p-2">
                                {setting.key} - {setting.value}
                              </span>
                              <Button
                                variant="outline-danger"
                                className="ml-auto p-2"
                                size="sm"
                                value={setting.key}
                                onClick={deleteSetting}
                              >
                                Delete
                              </Button>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </Form.Group>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/* Attribute Mapping */}
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <li className="font-weight-bold">Attribute mapping</li>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Form.Group>
                      <InputGroup className="mb-3">
                        <FormControl
                          name="key"
                          type="text"
                          placeholder="Add a key"
                          value={currentAttribute.key}
                          onChange={(event) =>
                            setCurrentAttribute({
                              ...currentAttribute,
                              [event.target.name]: event.target.value.trim()
                            })
                          }
                          isInvalid={
                            errors.attributeMappings.empty ||
                            errors.attributeMappings.exists
                          }
                        />
                        <FormControl
                          name="value"
                          type="text"
                          placeholder="Add a value"
                          value={currentAttribute.value}
                          onChange={(event) =>
                            setCurrentAttribute({
                              ...currentAttribute,
                              [event.target.name]: event.target.value.trim()
                            })
                          }
                          isInvalid={
                            errors.attributeMappings.empty ||
                            errors.attributeMappings.exists
                          }
                        />
                        <InputGroup.Append>
                          <Button
                            name="advancedSettingClients"
                            variant="outline-success"
                            onClick={handleAttribute}
                          >
                            Add the attribute
                          </Button>
                        </InputGroup.Append>
                        <Form.Control.Feedback type="invalid">
                          {errors.attributeMappings.empty ? (
                            <span>Please provide a key and a value</span>
                          ) : (
                            <span>Atrribute with this key exists</span>
                          )}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center">
                      {client.attributeMappings.length === 0 ? (
                        <Alert variant="danger">
                          No setting or flags added yet
                        </Alert>
                      ) : (
                        <ListGroup>
                          {client.attributeMappings.map((att) => (
                            <ListGroup.Item key={att.key} className="d-flex">
                              <span className="p-2">
                                {att.key} - {att.value}
                              </span>
                              <Button
                                variant="outline-danger"
                                className="ml-auto p-2"
                                size="sm"
                                value={att.key}
                                onClick={deleteAttribute}
                              >
                                Delete
                              </Button>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </Form.Group>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Modal.Footer>
              <Button type="submit" className="btn btn-primary">
                CREATE
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { currentCleint: state.client };
};

export default connect(mapStateToProps, {
  createClient,
  getClients
})(CreateClientModal);
