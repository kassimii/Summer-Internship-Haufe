import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import { getClients, clearClient } from "../redux/actions";
import { useHttpClient } from "../hooks/http-hook";

const jwt = require("jsonwebtoken");

function ClientFilterArea({ getClients, clearClient, token }) {
  const [searchedClients, setSearchedClients] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const { sendRequest } = useHttpClient();

  const handleSearchChange = ({ target }) => {
    setSearchedClients(target.value);
  };

  const handleGroupFilterChange = ({ target }) => {
    setSelectedGroup(target.value);
  };

  const handleStatusFilterChange = ({ target }) => {
    setSelectedStatus(target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    clearClient();
    getClients(
      sendRequest,
      `&name=${searchedClients}&group=${selectedGroup}&status=${selectedStatus}`,
      1,
      15
    );
  };

  const renderGroups = () => {
    const decoded = jwt.decode(token, { complete: true });
    const groups = decoded.payload.groups;
    return groups.map((group) => {
      return (
        <option id={group} value={group} key={group}>
          {group}
        </option>
      );
    });
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Card className="mt-3 mb-3 pt-5 pb-5">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <div className="row d-flex justify-content-center form-inline">
                  <div className="d-flex justify-content-center">
                    <Form.Control
                      type="text"
                      placeholder="Search client..."
                      onChange={handleSearchChange}
                      value={searchedClients}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="row d-flex justify-content-center form-inline">
                  <div className="d-flex justify-content-center">
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="groupSelect"
                      custom
                      onChange={handleGroupFilterChange}
                    >
                      <option id="default" value="">
                        Choose...
                      </option>
                      {renderGroups()}
                    </Form.Control>
                  </div>
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div className="row d-flex justify-content-center form-inline">
                  <div className="d-flex justify-content-center">
                    <Form.Control
                      as="select"
                      className="my-1 mr-sm-2"
                      id="statusSelect"
                      custom
                      onChange={handleStatusFilterChange}
                    >
                      <option value="0">Choose...</option>
                      <option value="NEW">New</option>
                      <option value="REQUEST APPROVAL">Request approval</option>
                      <option value="WAIT FOR DEPLOYMENT">
                        Wait for deployment
                      </option>
                      <option value="DEPLOYED">Deployed</option>
                    </Form.Control>
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}>
                <div className="row d-flex justify-content-center form-inline ">
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </div>
              </Col>
              <Col xs={6} md={4}></Col>
            </Row>
          </Container>
        </Card>
      </Form>
    </>
  );
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, { clearClient, getClients })(
  ClientFilterArea
);
