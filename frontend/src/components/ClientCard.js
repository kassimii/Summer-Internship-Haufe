import React from "react";
import ClientUpdateModal from "./ClientUpdateModal";

const ClientCard = (props) => {

  console.log(props.client.id);
  return (
    <div className="card">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.client.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ClientUpdateModal id = {props.client.id} />
        <a href="/" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ClientCard;
