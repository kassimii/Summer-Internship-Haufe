import React from "react";

import GroupCard from "./GroupCard";

const clients = ["1", "2", "3", "4", "5"];

const GroupsList = () => {
  return clients.map((client) => {
    return (
      <div key={client} className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <GroupCard id={client} />
        </div>
      </div>
    );
  });
};

export default GroupsList;
