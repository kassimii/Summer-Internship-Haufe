import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import GroupsList from "../components/GroupsList";
import GroupsPageTab from "../components/GroupsPageTab";
import { getGroups } from "../redux/actions/index";
import { useHttpClient } from "../hooks/http-hook";

function GroupsPage(props) {
  const { getGroups } = props;
  const [searchedGroups, setSearchedGroups] = useState(props.groups);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    setSearchedGroups(props.groups);
  }, [props.groups]);

  useEffect(() => {
    getGroups(sendRequest);
  }, [getGroups, sendRequest]);

  const onSearchChange = (event) => {
    let searchedGroups =
      event.target.value === ""
        ? props.groups
        : props.groups.filter((group) => {
            return group.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase());
          });
    setSearchedGroups(searchedGroups);
  };

  return (
    <div className="bg-light">
      <GroupsPageTab onSearchChange={onSearchChange} />
      <GroupsList groups={searchedGroups} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export default connect(mapStateToProps, {
  getGroups,
})(GroupsPage);
