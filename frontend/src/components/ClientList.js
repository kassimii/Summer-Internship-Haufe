import React from "react";

import ClientCard from "./ClientCard";

const clients = ["1", "2", "3", "4", "5"];

const ClientList = () => {
  return clients.map((client) => {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <ClientCard id={client} />
        </div>
      </div>
    );
  });
};

export default ClientList;
