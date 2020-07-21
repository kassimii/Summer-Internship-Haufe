import React from "react";

import GroupsList from "../components/GroupsList";
import GroupsPageTab from "../components/GroupsPageTab";
export default class GroupsPage extends React.Component {
  render() {
    return (
      <div className="bg-light">
        <GroupsPageTab />
        <GroupsList />
      </div>
    );
  }
}
