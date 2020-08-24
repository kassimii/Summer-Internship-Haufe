import React from "react";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import { getClient } from "../redux/actions";
import {
  ListGroup,
  Row,
  Col,
  Container,
  Button,
  Card,
  Accordion,
} from "react-bootstrap";

import "./scrollbar.css";

function ClientDetails({ selectedClient }) {
  const scrollContainerStyle = { maxHeight: "550px" };

  if (!selectedClient) {
    return (
      <>
        <h3>Please select a client</h3>
      </>
    );
  }

  const renderAdvancedSettings = () => {
    if (selectedClient.advancedSettingClients.length !== 0) {
      return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Advanced settings
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {selectedClient.advancedSettingClients.map((setting) => {
                return (
                  <ListGroup.Item key={setting.key}>
                    <p>
                      {setting.key} - {setting.value}{" "}
                    </p>
                  </ListGroup.Item>
                );
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
  };

  const renderAttributeMapping = () => {
    if (selectedClient.attributeMappings.length !== 0) {
      return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Attribute mapping
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {selectedClient.attributeMappings.map((attribute) => {
                return (
                  <ListGroup.Item key={attribute.key}>
                    <p>
                      {attribute.key} - {attribute.value}
                    </p>
                  </ListGroup.Item>
                );
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
  };

  const renderLastDeployed = () => {
    if (selectedClient.lastDeployed !== null) {
      return (
        <Card.Body>
          Last deployed: {selectedClient.lastDeployed.substring(0, 10)}
        </Card.Body>
      );
    }
  };

  return (
    <>
      <MDBContainer>
        <div
          className="scrollbar scrollbar-primary align-self-start mr-3"
          style={scrollContainerStyle}
        >
          <div className="card pl-3">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <Card.Header>
                <Container>
                  <Row>
                    <Col xs={12} md={8} lg={8}>
                      <div className="d-flex float-left m-2 col-mb-6">
                        <h3 className="card-title font-weight-bold">
                          {selectedClient.name}
                        </h3>
                      </div>
                    </Col>
                    <Col xs={6} md={4} lg={4}>
                      <div className="d-flex float-right m-2 col-mb-6">
                        <Button variant="primary">Update client</Button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={8} lg={8}>
                      <div className="d-flex float-left m-2 col-mb-6">
                        <h5 className="card-title">
                          STATUS: {selectedClient.latestStatus.type}
                        </h5>
                      </div>
                    </Col>
                    <Col xs={6} md={4} lg={4}>
                      <div className="d-flex float-right m-2 col-mb-6">
                        <Button variant="success">Publish client</Button>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={4} lg={4}></Col>
                    <Col xs={6} md={4} lg={4}></Col>
                    <Col xs={6} md={4} lg={4}>
                      <div className="d-flex float-right m-2 col-mb-6">
                        <Button variant="danger"> Delete client </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Header>
              <br />
              <Card.Body>Group: {selectedClient.group.name}</Card.Body>
              {renderLastDeployed()}
              <Accordion>
                {renderAdvancedSettings()}
                {renderAttributeMapping()}
              </Accordion>
            </div>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  return { selectedClient: state.selectedClient };
};

export default connect(mapStateToProps, {
  getClient,
})(ClientDetails);
