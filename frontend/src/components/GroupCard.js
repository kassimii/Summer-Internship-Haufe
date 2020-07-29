import React from "react";
import { Link } from "react-router-dom";

import CreateEditGroupModal from "./CreateEditGroupModal";

const GroupCard = (props) => {
  return props.group ? (
    <div className="card">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.group.name}</h5>
        <ul className="card-text">
          {props.group.claimToGroupMapping.map((claim) => {
            return <li key={claim}>{claim}</li>;
          })}
        </ul>
        <div className="d-flex justify-content-center form-inline">
          <Link
            type="button"
            to={"/groups/" + props.group.id}
            className="btn btn-primary m-2"
          >
            Go to group
          </Link>
          <CreateEditGroupModal id={props.group.id} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default GroupCard;
