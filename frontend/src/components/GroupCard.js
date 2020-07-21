import React from "react";
import { Link } from "react-router-dom";

const renderEditModal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#groupModal"
      >
        Edit group
      </button>
      <div
        className="modal fade"
        id="groupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="groupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="groupModalLabel">
                Modal title
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
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GroupCard = (props) => {
  return (
    <div className="card">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Group title {props.id}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-center form-inline">
          <Link
            type="button"
            to={"/groups/" + props.id}
            className="btn btn-primary m-2"
          >
            Go to group
          </Link>
          {renderEditModal()}
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
