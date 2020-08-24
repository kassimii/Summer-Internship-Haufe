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
      <Card className="mt-3 mb-3 pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <div className="row d-flex justify-content-center form-inline">
                <div className="d-flex justify-content-center">
                  <form className="md-form form-sm px-3">
                    <i className="fas fa-search" area-hidden="true"></i>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Search client..."
                      onChange={props.onSearchChange}
                      value={props.searchValue}
                    />
                  </form>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="row d-flex justify-content-center form-inline">
                <div className="d-flex justify-content-center">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Filter by group"
                    variant="success"
                  >
                    <Dropdown.Item href="#/action-1">Group 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Group 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Group 3 </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="row d-flex justify-content-center form-inline">
                <div className="d-flex justify-content-center">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Filter by status"
                    variant="success"
                  >
                    <Dropdown.Item href="#/action-1">Group 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Group 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Group 3 </Dropdown.Item>
                  </DropdownButton>
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
