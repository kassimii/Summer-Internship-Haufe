import React, { useState, useEffect } from "react";

import ClientCard from "./ClientCard";

import { connect } from "react-redux";
import { getClients } from "../redux/actions";

// const clients = ["1", "2", "3", "4", "5"];

// const ClientsList = () => {
//   return clients.map((client) => {
//     return (
//       <div key={client}>
//         <div className="card mb-4 shadow-sm">
//           <ClientCard id={client} />
//         </div>
//       </div>
//     );
//   });
// };



const ClientsList = (props) => {

  useEffect(() => {
    getClients();
  }, [getClients]);

  // console.log(props.clients);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {props.clients.map((client) => {
            return (
              <div key={client.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <ClientCard client={client} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { clients: state.clients };
};

export default connect(mapStateToProps, {
  getClients
})(ClientsList);


