import React from "react";
import { connect } from "react-redux";

import GroupsList from "../components/GroupsList";
import GroupsPageTab from "../components/GroupsPageTab";
import { getGroups, createGroup } from "../redux/actions/index";

class GroupsPage extends React.Component {
  componentDidMount() {
    this.props.getGroups();
  }

  createGroup = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    this.props.createGroup(event.target[0].value);
  };

  render() {
    return (
      <div className="bg-light">
        <GroupsPageTab createGroup={this.createGroup} />
        <GroupsList groups={this.props.groups} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export default connect(mapStateToProps, { getGroups, createGroup })(GroupsPage);
