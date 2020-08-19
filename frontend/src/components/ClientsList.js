import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { getClient, getClients } from "../redux/actions";

const ClientsList = (props) => {
  useEffect(() => {
    getClients();
  }, [getClients]);

  // console.log(props.clients);

  return (
    <div className="album py-5 ">
      <div className="container">
        <ListGroup>
          {props.clients.map((client) => {
            return (
              <ListGroup.Item
                action
                variant="primary"
                onClick={() => props.getClient(client.id)}
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
  getClient,
})(ClientsList);
