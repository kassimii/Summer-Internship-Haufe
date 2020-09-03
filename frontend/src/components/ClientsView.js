import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import ClientsList from "../components/ClientsList";
import ClientDetails from "../components/ClientDetails";

function ClientsView(props) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4} lg={4}>
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
