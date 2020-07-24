import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { store } from "../redux/store";

export default function CreateGroupModal(props) {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const handleSubmit = (event) => {
    props.createGroup(event);
    const unsubscribe = store.subscribe(() => {
      handleClose();
      unsubscribe();
    });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="group-name" className="col-form-label">
                Group name:
                <br />
              </label>

              <input
                type="text"
                className="form-control"
                id="group-name"
                name="group-name"
                placeholder="Enter name"
              />
            </div>
            <Modal.Footer>
              <Button onClick={handleClose} className="btn btn-secondary">
                Close
              </Button>
              <Button type="submit" className="btn btn-primary">
                Create group
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
