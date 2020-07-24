import React, { useState } from "react";
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Form,
  Dropdown,
  ListGroup,
} from "react-bootstrap";
import { store } from "../redux/store";

export default function CreateGroupModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const [currentClaim, setCurrentClaim] = useState("");
  const [group, setGroup] = useState({
    id: null,
    name: "",
    claimToGroupMapping: [],
    defaultSettings: [],
  });

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const handleClaim = () => {
    handleChange({
      target: { name: "claimToGroupMapping", value: currentClaim },
    });
    setCurrentClaim("");
  };
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
    props.createGroup(group);
    const unsubscribe = store.subscribe(() => {
      handleClose();
      unsubscribe();
    });
  };

  console.log(group);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create group
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
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Enter a name"
              />
            </Form.Group>
            <Form.Group controlId="claimsToGroupMapping">
              <Form.Label>Claims to group</Form.Label>
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
            <Form.Group>
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
                        >
                          Delete
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Modal.Footer>
              <Button onClick={handleClose} className="btn btn-secondary">
                Close
              </Button>
              <Button type="submit" className="btn btn-primary">
                Create group
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
