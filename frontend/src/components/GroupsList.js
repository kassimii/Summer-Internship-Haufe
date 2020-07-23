import React from "react";

import GroupCard from "./GroupCard";

const GroupsList = (props) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {props.groups.map((group) => {
            return (
              <div key={group.name} className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <GroupCard
                    id={group.name}
                    name={group.name}
                    editGroup={props.editGroup}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupsList;
