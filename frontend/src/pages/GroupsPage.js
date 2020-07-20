import React from "react";

import GroupsList from "../components/GroupsList";

export default class GroupsPage extends React.Component {
  render() {
    return (
      <div className="bg-light">
        {renderGroupPicker()}
        {renderSearchBox()}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <GroupsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const renderGroupPicker = () => {
  return (
    <div className="d-flex justify-content-center m-2 col-mb-6">
      <h4 className="font-weight-bold my-4">Chose your group</h4>
    </div>
  );
};

const renderSearchBox = () => {
  return (
    <div className="row d-flex justify-content-center form-inline">
      <div className="d-flex justify-content-center">
        <form className="md-form form-sm px-3">
          <i className="fas fa-search" area-hidden="true"></i>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Search groups"
          />
        </form>
        <div className="px-3">
          <button type="button" className="form-control btn btn-primary">
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
};
