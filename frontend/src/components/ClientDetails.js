import React from "react";
import { MDBContainer, MDBScrollbar } from "mdbreact";
import "./scrollbar.css";

function ClientDetails(props) {
  const scrollContainerStyle = { maxHeight: "650px" };
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
              <h5 className="card-title">{props.clientTitle}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.Cras sit amet nibh libero, in
                gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                commodo. Cras purus odio, vestibulum in vulputate at, tempus
                viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.Cras sit amet
                nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin commodo. Cras purus odio, vestibulum in vulputate
                at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.Cras
                sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.Cras sit amet nibh libero, in gravida
                nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra
                turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.Cras sit amet nibh
                libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin commodo. Cras purus odio, vestibulum in vulputate
                at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.Cras
                sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.Cras sit amet nibh libero, in gravida
                nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra
                turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.Cras sit amet nibh
                libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin commodo. Cras purus odio, vestibulum in vulputate
                at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </div>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

export default ClientDetails;
