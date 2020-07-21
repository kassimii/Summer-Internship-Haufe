import React from "react";

import GroupCard from "./GroupCard";

const clients = ["1", "2", "3", "4", "5"];

const GroupsList = () => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {clients.map((client) => {
            return (
              <div key={client} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <GroupCard id={client} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupsList;
