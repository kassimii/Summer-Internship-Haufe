import React, { useState } from "react";
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
  Dropdown,
  Tabs,
  Tab,
} from "react-bootstrap";

import "./scrollbar.css";

function ClientDetails({ selectedClient }) {
  const [selectedAction, setSelectedAction] = useState("");
  const scrollContainerStyle = { maxHeight: "500px" };

  if (!selectedClient) {
    return (
      <>
        <h3>Please select a client</h3>
      </>
    );
  }

  const renderLastDeployed = () => {
    if (selectedClient.lastDeployed !== null) {
      return (
        <Card.Body>
          Last deployed: {selectedClient.lastDeployed.substring(0, 10)}
        </Card.Body>
      );
    }
  };

  const renderAdvancedSettings = () => {
    if (selectedClient.advancedSettingClients.length !== 0) {
      return (
        <Card>
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
        </Card>
      );
    }
  };

  const renderAttributeMapping = () => {
    if (selectedClient.attributeMappings.length !== 0) {
      return (
        <Card>
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
        </Card>
      );
    }
  };

  const renderMetadataDownload = () => {
    // if (selectedClient.metadata !== 0)
    {
      return (
        <Card>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <div className="d-flex float-centre m-2 col-mb-6">
                  <Button variant="success"> Download SP</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <div className="d-flex float-centre m-2 col-mb-6">
                  <Button variant="success"> Download IDP </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      );
    }
  };

  const handleChange = ({ target }) => {
    setSelectedAction(target.value);
    switch (target.value) {
      case "edit":
        console.log("edit");
        return;
      case "publish":
        console.log("publish");
        return;
      case "deploy":
        console.log("deploy");
        return;
      case "delete":
        console.log("delete");
        return;
      default:
        return;
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
                        <select onChange={handleChange}>
                          <option value="edit">Edit Client</option>
                          <option value="publish">Publish client</option>
                          <option value="deploy">Deploy client</option>
                          <option value="delete">Delete client</option>
                        </select>
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
                  </Row>
                </Container>
              </Card.Header>
              <br />
              <Card.Body>Group: {selectedClient.group.name}</Card.Body>
              {renderLastDeployed()}

              <Tabs defaultActiveKey="advancedSetings" id="details">
                <Tab eventKey="advancedSetings" title="Advanced Settings">
                  {renderAdvancedSettings()}
                </Tab>
                <Tab eventKey="attributemapping" title="Attribute Mapping">
                  {renderAttributeMapping()}
                </Tab>
                <Tab eventKey="metadata" title="Metadata">
                  {renderMetadataDownload()}
                </Tab>
              </Tabs>
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
