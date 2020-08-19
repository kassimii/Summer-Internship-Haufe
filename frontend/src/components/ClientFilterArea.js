import React from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Card,
} from "react-bootstrap";

import CreateClientModal from "./ClientCreateModal";

function ClientFilterArea(props) {
  return (
    <>
      <Card className="mt-3 mb-3 pt-3 pb-5">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <div className="d-flex justify-content-center m-2 col-mb-6">
                <h4 className="font-weight-bold my-4">Search for clients</h4>
              </div>
              <div className="row d-flex justify-content-center form-inline">
                <div className="d-flex justify-content-center">
                  <form className="md-form form-sm px-3">
                    <i className="fas fa-search" area-hidden="true"></i>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Search groups"
                      onChange={props.onSearchChange}
                      value={props.searchValue}
                    />
                  </form>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="d-flex justify-content-center m-2 col-mb-6">
                <h4 className="font-weight-bold my-4">Filter by group</h4>
              </div>
              <div className="row d-flex justify-content-center form-inline">
                <div className="d-flex justify-content-center">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                    variant="warning"
                  >
                    <Dropdown.Item href="#/action-1">Group 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Group 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Group 3 </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="d-flex justify-content-center m-2 col-mb-6">
                <h4 className="font-weight-bold my-4">Add new client</h4>
              </div>
              <div className="row d-flex justify-content-center form-inline">
                <div className="d-flex justify-content-center">
                  <CreateClientModal createClient={props.createClient} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default ClientFilterArea;
