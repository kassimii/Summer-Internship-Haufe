import React from "react";

import ClientCard from "./ClientCard";

const clients = ["1", "2", "3", "4", "5"];

const ClientsList = () => {
  return clients.map((client) => {
    return (
      <div key={client}>
        <div className="card mb-4 shadow-sm">
          <ClientCard id={client} />
        </div>
      </div>
    );
  });
};

export default ClientsList;
