import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function EditGroupModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState(props.name);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const handleSubmit = (event) => {
    props.editGroup(event, props.name);
    handleClose();
  };

  const onChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit group
      </Button>

      <Modal
        onHide={handleClose}
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit group
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
                value={name}
                onChange={onChange}
              />
            </div>
            <Modal.Footer>
              <Button onClick={handleClose} className="btn btn-secondary">
                Close
              </Button>
              <Button type="submit" className="btn btn-primary">
                Save changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
