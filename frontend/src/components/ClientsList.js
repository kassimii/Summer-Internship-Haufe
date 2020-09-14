import React, { useEffect, useState } from "react";
import { ListGroup, Pagination, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getClient, getClients } from "../redux/actions";
import { useHttpClient } from "../hooks/http-hook";
import "./scrollbar.css";

const ClientsList = ({ getClient, getClients, clients, selectedClient }) => {
  const { sendRequest } = useHttpClient();
  const [activePage, setActivePage] = useState(1);
  const pageLength = 15;
  useEffect(() => {
    getClients(sendRequest, "", activePage, pageLength);
  }, [getClients, sendRequest, activePage, pageLength]);
  useEffect(() => {
    setActivePage(clients.currentPage);
  }, [clients.currentPage]);
  const renderPageNums = () => {
    let pages = [];
    for (let index = 1; index <= clients.totalPages; index++) {
      pages.push(
        <Pagination.Item
          key={index}
          active={index === activePage}
          onClick={() => setActivePage(index)}
        >
          {index}
        </Pagination.Item>
      );
    }
    return pages;
  };
  return (
    <div className="album py-2">
      <div className="container">
        <ListGroup
          className="scrollbar scrollbar-primary align-self-starts mr-3"
          style={{ height: "49.9vh" }}
        >
          {clients.clients ? (
            clients.clients.map((client) => {
              return (
                <ListGroup.Item
                  as={Button}
                  key={client.id}
                  variant={
                    selectedClient && selectedClient.id === client.id
                      ? "primary"
                      : "dark"
                  }
                  onClick={() => getClient(client.id, sendRequest)}
                  className="btn btn-block"
                >
                  {client.name}
                </ListGroup.Item>
              );
            })
          ) : (
            <div>Loading..</div>
          )}
        </ListGroup>
      </div>
      <Pagination className="mt-5 justify-content-center">
        {renderPageNums()}
      </Pagination>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { clients: state.clients, selectedClient: state.selectedClient };
};

export default connect(mapStateToProps, {
  getClients,
  getClient
})(ClientsList);
