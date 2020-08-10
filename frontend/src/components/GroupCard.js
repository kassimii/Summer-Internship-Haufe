import React from "react";
import { Link } from "react-router-dom";

import CreateEditGroupModal from "./CreateEditGroupModal";

const GroupCard = ({ group }) => {
  return group ? (
    <div className="card">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{group.name}</h5>
        <ul className="card-text">
          {group.claims.map((claim) => {
            const value = claim.claim ? claim.claim : claim;
            return <li key={value}>{value}</li>;
          })}
        </ul>
        <div className="d-flex justify-content-center form-inline">
          <Link
            type="button"
            to={"/groups/" + group.id}
            className="btn btn-primary m-2"
          >
            Go to group
          </Link>
          <CreateEditGroupModal id={group.id} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default GroupCard;
