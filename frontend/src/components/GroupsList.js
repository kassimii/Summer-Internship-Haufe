import React from "react";

import GroupCard from "./GroupCard";

const GroupsList = (props) => {
  return props.groups ? (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {props.groups.map((group) => {
            return (
              <div key={group.id} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <GroupCard group={group} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  );
};

export default GroupsList;
