import React, { useEffect, useState } from "react";

import GroupCard from "./GroupCard";

const GroupsList = ({ props }) => {
  const { groups, searchField } = props;
  const [searchedGroups, setSearchedGroups] = useState(groups);
  useEffect(() => {
    if (groups) {
      let searchedGroups =
        searchField === ""
          ? groups
          : groups.filter((group) => {
              return group.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
            });
      if (searchedGroups.length === 0) setSearchedGroups(null);
      else setSearchedGroups(searchedGroups);
    }
  }, [groups, searchField]);

  useEffect(() => {
    setSearchedGroups(groups);
  }, [groups]);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {searchedGroups ? (
            searchedGroups.length === 0 ? (
              <div className="d-flex justify-content-center m-2 col-mb-6">
                Loading....
              </div>
            ) : (
              searchedGroups.map((group) => {
                return (
                  <div key={group.id} className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                      <GroupCard group={group} />
                    </div>
                  </div>
                );
              })
            )
          ) : (
            <div>No groups to display</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupsList;
