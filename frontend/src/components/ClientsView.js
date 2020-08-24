import React from "react";
import { MDBContainer } from "mdbreact";
import { Row, Col, Container } from "react-bootstrap";
import "./scrollbar.css";

import ClientsList from "../components/ClientsList";
import ClientDetails from "../components/ClientDetails";
import CreateClientModal from "./ClientCreateModal";

function ClientsView(props) {
  const scrollContainerStyle = { maxHeight: "550px" };
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4} lg={4}>
            <div className="row d-flex justify-content-center form-inline">
              <div className="d-flex justify-content-center">
                <CreateClientModal createClient={props.createClient} />
              </div>
            </div>
            <MDBContainer>
              <div
                className="scrollbar scrollbar-primary align-self-starts mr-3"
                style={scrollContainerStyle}
              >
                <ClientsList />
              </div>
            </MDBContainer>
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
