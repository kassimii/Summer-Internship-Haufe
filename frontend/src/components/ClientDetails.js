import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import { addStatus } from "../redux/actions";
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  Tabs,
  Tab,
  ButtonGroup,
  Table,
} from "react-bootstrap";

import "./scrollbar.css";
import { useHttpClient } from "../hooks/http-hook";

function ClientDetails({
  selectedClient,
  userSignIn,
  currentStatus,
  addStatus,
}) {
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    setKey("advancedSetings");
  }, [selectedClient]);
  const [activeKey, setKey] = useState("advancedSetings");
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {selectedClient.advancedSettingClients.map((setting) => {
                  return (
                    <tr key={setting.key}>
                      <td>{setting.key}</td>
                      <td>{setting.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {selectedClient.attributeMappings.map((attribute) => {
                  return (
                    <tr key={attribute.key}>
                      <td>{attribute.key}</td>
                      <td>{attribute.value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      );
    }
  };

  const renderMetadataDownload = () => {
    // if (selectedClient.metadata !== 0)
    // {
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
    // }
  };

  const renderAdminButtons = () => {
    if (userSignIn.userInfo.isAdmin) {
      return (
        <>
          <Button variant="secondary">Deploy</Button>
          <Button variant="danger">Delete</Button>
        </>
      );
    }
  };

  const handlePublishClick = () => {
    addStatus(userSignIn.userInfo.id, "REQUEST APPROVAL", sendRequest);
  };

  return (
    <>
      <MDBContainer>
        <div
          className="scrollbar scrollbar-primary align-self-start mr-3"
          style={{ height: "70vh" }}
        >
          <div className="card pl-3">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <Card.Header>
                <Container>
                  <Row>
                    <Col>
                      <div className="d-flex float-left m-2 col-mb-6">
                        <h3 className="card-title font-weight-bold">
                          {selectedClient.name}
                        </h3>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex float-left m-2 col-mb-6">
                        <h5 className="card-title">
                          STATUS: {selectedClient.latestStatus.type}
                        </h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div className="d-flex float-left m-2 col-mb-6">
                      <ButtonGroup aria-label="Client actions">
                        <Button variant="secondary">Edit</Button>
                        <Button
                          variant="secondary"
                          onClick={handlePublishClick}
                        >
                          Publish
                        </Button>
                        {renderAdminButtons()}
                      </ButtonGroup>
                    </div>
                  </Row>
                </Container>
              </Card.Header>
              <br />
              <Card.Body>Group: {selectedClient.group.name}</Card.Body>
              {renderLastDeployed()}

              <Tabs
                activeKey={activeKey}
                id="details"
                onSelect={(k) => setKey(k)}
              >
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
  return {
    selectedClient: state.selectedClient,
    userSignIn: state.userSignIn,
    currentStatus: state.currentStatus,
  };
};

export default connect(mapStateToProps, {
  addStatus,
})(ClientDetails);
