import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Form,
  Dropdown,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { store } from "../redux/store";
import { getGroup, editGroup, clearGroup } from "../redux/actions/index";

const uninitializedGroup = {
  id: Math.round(Math.random() * 100),
  name: "",
  claimToGroupMapping: [],
  defaultSettings: [],
};

function CreateEditGroupModal({
  id,
  getGroup,
  editGroup,
  clearGroup,
  createGroup,
  currentGroup,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [currentClaim, setCurrentClaim] = useState("");
  const [currentSetting, setCurrentSetting] = useState({
    key: "",
    value: "",
  });
  const [group, setGroup] = useState(uninitializedGroup);
  const createOrEditButtonText = id ? "Edit Group" : "Create group";

  useEffect(() => {
    if (modalShow && currentGroup && id === currentGroup.id) {
      setGroup(currentGroup);
    }
  }, [currentGroup, modalShow, id]);

  useEffect(() => {
    if (id && modalShow) {
      getGroup(id);
    }
  }, [modalShow, id, getGroup]);

  // Modal display helpers
  const handleClose = () => {
    clearGroup();
    setGroup(uninitializedGroup);
    setModalShow(false);
  };
  const handleShow = () => {
    setModalShow(true);
  };
  // Form Control helpers
  const handleClaim = () => {
    handleChange({
      target: { name: "claimToGroupMapping", value: currentClaim },
    });
    setCurrentClaim("");
  };
  const handleSetting = () => {
    handleChange({
      target: { name: "defaultSettings", value: currentSetting },
    });
    setCurrentSetting({ key: "", value: "" });
  };
  const deleteClaim = (event) => {
    let newMapping = group.claimToGroupMapping.filter(
      (claim) => claim !== event.target.value
    );
    setGroup({ ...group, claimToGroupMapping: newMapping });
  };

  const deleteSetting = (event) => {
    let newSettings = group.defaultSettings.filter((setting) => {
      return setting.key !== event.target.value;
    });
    setGroup({ ...group, defaultSettings: newSettings });
  };

  // Handling change to the state of the input
  function handleChange({ target }) {
    if (target.name === "name")
      setGroup({ ...group, [target.name]: target.value });
    else {
      setGroup({
        ...group,
        [target.name]: [...group[target.name], target.value],
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id) {
      createGroup(group);
    } else {
      editGroup(group);
    }
    const unsubscribe = store.subscribe(() => {
      unsubscribe();
      handleClose();
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {createOrEditButtonText}
      </Button>

      <Modal
        onHide={handleClose}
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a new group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* ======= NAME INPUT COMPONENTS ======= */}
            <Form.Group controlId="name">
              <Form.Label className="font-weight-bold">
                <li>Name</li>
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter a name"
                value={group.name}
              />
            </Form.Group>
            {/* ======= CLAIMS INPUT COMPONENTS ======= */}
            <Form.Group controlId="claimsToGroupMapping">
              <Form.Label className="font-weight-bold">
                <li>Claims to group</li>
              </Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="claimsToGroupMapping"
                  type="text"
                  placeholder="Add a claim"
                  value={currentClaim}
                  onChange={(event) => setCurrentClaim(event.target.value)}
                />
                <InputGroup.Append>
                  <Button
                    name="claimsToGroupMapping"
                    variant="outline-success"
                    onClick={handleClaim}
                  >
                    Add the claim
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              {group.claimToGroupMapping.length === 0 ? (
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">No claims added</Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Button
                      disabled
                      variant="info"
                      style={{ pointerEvents: "none" }}
                    >
                      Show added claims
                    </Button>
                  </span>
                </OverlayTrigger>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Show added claims
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <ListGroup>
                      {group.claimToGroupMapping.map((claim) => (
                        <ListGroup.Item key={claim} className="d-flex">
                          <span className="p-2">{claim}</span>
                          <Button
                            variant="outline-danger"
                            className="ml-auto p-2"
                            size="sm"
                            value={claim}
                            onClick={deleteClaim}
                          >
                            Delete
                          </Button>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Form.Group>
            {/* ======= DEFAULT SETTINGS AND FLAGS INPUT COMPONENTS ======= */}
            <Form.Group>
              <Form.Label className="font-weight-bold">
                <li>Default settings and flags</li>
              </Form.Label>
              <InputGroup className="mb-3">
                <FormControl
                  name="key"
                  type="text"
                  placeholder="Add a key"
                  value={currentSetting.key}
                  onChange={(event) =>
                    setCurrentSetting({
                      ...currentSetting,
                      [event.target.name]: event.target.value,
                    })
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
                      [event.target.name]: event.target.value,
                    })
                  }
                />
                <InputGroup.Append>
                  <Button
                    name="defaultSettings"
                    variant="outline-success"
                    onClick={handleSetting}
                  >
                    Add the setting
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              {group.defaultSettings.length === 0 ? (
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      No settings or flags added
                    </Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Button
                      disabled
                      variant="info"
                      style={{ pointerEvents: "none" }}
                    >
                      Show added settings and flags
                    </Button>
                  </span>
                </OverlayTrigger>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Show added settings and flags
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <ListGroup>
                      {group.defaultSettings.map((setting) => (
                        <ListGroup.Item key={setting.key} className="d-flex">
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
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Form.Group>
            <Modal.Footer>
              <Button onClick={handleClose} className="btn btn-secondary">
                Close
              </Button>
              <Button type="submit" className="btn btn-primary">
                {createOrEditButtonText}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { currentGroup: state.group };
};

export default connect(mapStateToProps, { getGroup, editGroup, clearGroup })(
  CreateEditGroupModal
);
