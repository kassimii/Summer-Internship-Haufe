import React from "react";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import { getClient, getGroup } from "../redux/actions";
import { ListGroup, Row, Col, Container, Button, Card } from "react-bootstrap";

import "./scrollbar.css";
import { useHttpClient } from "../hooks/http-hook";

function ClientDetails({ selectedClient, group }) {
  const scrollContainerStyle = { maxHeight: "550px" };
  const { sendRequest } = useHttpClient();

  // console.log(group);

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
        <ListGroup variant="flush">
          <h6 className="card-text ">Advanced settings: </h6>
          {selectedClient.advancedSettingClients.map((setting) => {
            return (
              <ListGroup.Item key={setting.key}>
                <p>Key: {setting.key}</p>
                <p>Value: {setting.value}</p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      );
    }
  };

  const renderAttributeMapping = () => {
    if (selectedClient.attributeMappings.length !== 0) {
      return (
        <ListGroup variant="flush">
          <h6 className="card-text  ">Attribute mapping: </h6>
          {selectedClient.attributeMappings.map((attribute) => {
            return (
              <ListGroup.Item key={attribute.key}>
                <p>Key: {attribute.key}</p>
                <p>Value: {attribute.value}</p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      );
    }
  };

  const renderLastDeployed = () => {
    if (selectedClient.lastDeployed !== null) {
      return (
        <h6>Last deployed: {selectedClient.lastDeployed.substring(0, 10)}</h6>
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
                        <h3 className="card-title">{selectedClient.name}</h3>
                      </div>
                    </Col>
                    <Col xs={6} md={4} lg={4}>
                      <div className="d-flex float-right m-2 col-mb-6">
                        <Button variant="primary">Update client</Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Header>
              <br />
              <h6>Status: {selectedClient.latestStatus.type}</h6>
              <h6>Group: {selectedClient.group_id}</h6>
              {renderLastDeployed()}
              {renderAdvancedSettings()}
              {renderAttributeMapping()}
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
  getGroup,
})(ClientDetails);
