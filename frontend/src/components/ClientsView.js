import React from "react";
import { MDBContainer, MDBScrollbar } from "mdbreact";
import { Row, Col, Container } from "react-bootstrap";
import "./scrollbar.css";

import ClientsList from "../components/ClientsList";
import ClientDetails from "../components/ClientDetails";

function ClientsView(props) {
  const scrollContainerStyle = { maxHeight: "650px" };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <MDBContainer>
              <div
                className="scrollbar scrollbar-primary align-self-starts mr-3"
                style={scrollContainerStyle}
              >
                <ClientsList clients ={props.clients}/>
              </div>
            </MDBContainer>
          </Col>
          <Col xs={10} md={6}>
            <ClientDetails clientTitle="Client" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientsView;
