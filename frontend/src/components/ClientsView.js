import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import ClientsList from "../components/ClientsList";
import ClientDetails from "../components/ClientDetails";
import CreateClientModal from "./ClientCreateModal";

function ClientsView(props) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4} lg={4}>
            <div className="row d-flex justify-content-center form-inline">
              <div className="d-flex justify-content-center mb-3">
                <CreateClientModal createClient={props.createClient} />
              </div>
            </div>
            <ClientsList />
          </Col>
          <Col xs={6} md={8} lg={8}>
            <ClientDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientsView;
