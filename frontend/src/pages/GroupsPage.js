import React from "react";
import { connect } from "react-redux";

import GroupsList from "../components/GroupsList";
import GroupsPageTab from "../components/GroupsPageTab";
import { getGroups, createGroup } from "../redux/actions/index";

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

  componentDidMount(prevProps) {
    this.props.getGroups();
  }

  createGroup = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    this.props.createGroup(event.target[0].value);
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
    console.log(this.state);
    return (
      <div className="bg-light">
        <GroupsPageTab
          createGroup={this.createGroup}
          onSearchChange={this.onSearchChange}
        />
        <GroupsList groups={this.state.searchedGroups} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { groups: state.groups };
};

export default connect(mapStateToProps, { getGroups, createGroup })(GroupsPage);
