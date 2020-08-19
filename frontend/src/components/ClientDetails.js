import React from "react";
import { MDBContainer } from "mdbreact";
import "./scrollbar.css";
import { connect } from "react-redux";
import { getClient } from "../redux/actions";
import { ListGroup, Item } from "react-bootstrap";

function ClientDetails({ selectedClient }) {
  const scrollContainerStyle = { maxHeight: "550px" };
  if (!selectedClient) {
    return (
      <>
        <h3>Please select a client</h3>
      </>
    );
  }
  console.log(selectedClient);
  return (
    <>
      <MDBContainer>
        <div
          className="scrollbar scrollbar-primary align-self-start mr-3"
          style={scrollContainerStyle}
        >
          <div className="card">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{selectedClient.name}</h5>

              <ListGroup variant="flush">
                <h6 className="card-text">Advanced settings: </h6>
                {selectedClient.advancedSettings.map((setting) => {
                  return (
                    <ListGroup.Item>
                      <p>Key: {setting.key}</p>
                      <p>Value: {setting.value}</p>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>

              <ListGroup variant="flush">
                <h6 className="card-text">Attribute mapping: </h6>
                {selectedClient.attribute.map((attribute) => {
                  return (
                    <ListGroup.Item>
                      <p>Key: {attribute.key}</p>
                      <p>Value: {attribute.value}</p>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
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
