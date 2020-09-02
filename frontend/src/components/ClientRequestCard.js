import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function ClientRequestCard() {
  return (
    <>
      <Card className="d-flex float-centre m-2 col-mb-6 mr-5 ml-5 mt-3 mb-3">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Client title</Card.Title>
            </Col>
            <Col className="d-flex float-right ">
              <Button variant="success">Accept</Button>
            </Col>
            <Col className="d-flex float-right ">
              <Button variant="danger">Decline</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default ClientRequestCard;
