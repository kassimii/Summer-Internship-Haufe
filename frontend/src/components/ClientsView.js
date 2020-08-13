import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import ClientsList from "../components/ClientsList";
import ClientDetails from "../components/ClientDetails";

function ClientsView() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <ClientsList />
          </Col>
          <Col xs={6} md={4}>
            <ClientDetails clientTitle="Client" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientsView;
