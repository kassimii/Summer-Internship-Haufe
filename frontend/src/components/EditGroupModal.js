import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { getGroup, editGroup } from "../redux/actions/index";

function EditGroupModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.group.name);
  }, [props.group.name]);

  const handleClose = () => setModalShow(false);
  const handleShow = () => {
    setModalShow(true);
    props.getGroup(props.id);
  };
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
          {props.group === null || props.group.id !== props.id ? (
            <div>Loading...</div>
          ) : (
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
                  value={name || ""}
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
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return { group: state.group };
};

export default connect(mapStateToProps, { getGroup, editGroup })(
  EditGroupModal
);
