import React, { useState } from "react";

export default function CreateGroupModal({ createGroup }) {
  const [nameField, setNameField] = useState("");

  const onInputChange = (event) => {
    setNameField(event.target.value);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#createGroupModal"
      >
        Create group
      </button>
      <div
        className="modal fade"
        id="createGroupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="creategroupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createGroupModalLabel">
                Create a new group
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body row justify-content-md-center">
              <form onSubmit={createGroup}>
                <div className="form-group">
                  <label htmlFor="group-name" className="col-form-label m-2">
                    Group name:
                    <br />
                  </label>

                  <input
                    type="text"
                    className="form-control m-2"
                    id="group-name"
                    name="group-name"
                    placeholder="Enter name"
                    onChange={onInputChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Create group
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
