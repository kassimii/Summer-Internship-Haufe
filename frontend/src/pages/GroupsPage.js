import React from "react";
import { connect } from "react-redux";

import GroupsList from "../components/GroupsList";
import GroupsPageTab from "../components/GroupsPageTab";
import { getGroups, createGroup, editGroup } from "../redux/actions/index";

class GroupsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedGroups: this.props.groups,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.groups !== this.props.groups)
      this.setState({ searchedGroups: this.props.groups });
  }

  componentDidMount() {
    this.props.getGroups();
  }

  createGroup = (event) => {
    event.preventDefault();
    this.props.createGroup(event.target[0].value);
  };

  editGroup = (event, oldName) => {
    event.preventDefault();
    this.props.editGroup({ newName: event.target[0].value, oldName });
  };

  onSearchChange = (event) => {
    let searchedGroups =
      this.state.searchField === ""
        ? this.props.groups
        : this.props.groups.filter((group) => {
            return group.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase());
          });
    this.setState({ searchedGroups: searchedGroups });
  };

  render() {
    return (
      <div className="bg-light">
        <GroupsPageTab
          createGroup={this.createGroup}
          onSearchChange={this.onSearchChange}
        />
        <GroupsList
          editGroup={this.editGroup}
          groups={this.state.searchedGroups}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export default connect(mapStateToProps, { getGroups, createGroup, editGroup })(
  GroupsPage
);
