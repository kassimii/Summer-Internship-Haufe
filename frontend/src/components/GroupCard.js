import React from "react";
import { Link } from "react-router-dom";

import EditGroupModal from "./EditGroupModal";

const GroupCard = (props) => {
  return (
    <div className="card">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.id}</h5>
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
          <EditGroupModal name={props.name} editGroup={props.editGroup} />
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
