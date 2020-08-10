import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import GroupsList from "../components/GroupsList";
import GroupsPageTab from "../components/GroupsPageTab";
import { getGroups } from "../redux/actions/index";
import { useHttpClient } from "../hooks/http-hook";

function GroupsPage(props) {
  const { getGroups } = props;
  const [searchField, setSearchField] = useState("");
  const groups = props.groups;
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    setSearchField("");
  }, [props.groups]);

  useEffect(() => {
    getGroups(sendRequest);
  }, [getGroups, sendRequest]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="bg-light">
      <GroupsPageTab
        searchValue={searchField}
        onSearchChange={onSearchChange}
      />
      <GroupsList props={{ groups, searchField }} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export default connect(mapStateToProps, {
  getGroups
})(GroupsPage);
