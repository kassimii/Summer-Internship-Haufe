import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { getClient, getClients } from "../redux/actions";
import { useHttpClient } from "../hooks/http-hook";

const ClientsList = ({ getClient, getClients, clients }) => {
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    getClients(sendRequest, "/?name=alala");
  }, [getClients, sendRequest]);

  return (
    <div className="album py-5 ">
      <div className="container">
        <ListGroup>
          {clients.map((client) => {
            return (
              <ListGroup.Item
                key={client.id}
                action
                variant="primary"
                onClick={() => getClient(client.id, sendRequest)}
                className="btn-block "
              >
                {client.name}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { clients: state.clients };
};

export default connect(mapStateToProps, {
  getClients,
  getClient
})(ClientsList);
