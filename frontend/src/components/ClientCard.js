import React from "react";

const ClientCard = (props) => {
  return (
    <div className="card">
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Client title {props.id}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ClientCard;
