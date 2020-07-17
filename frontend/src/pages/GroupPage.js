import React from "react";

import ClientList from "../components/ClientList";

export default class GroupPage extends React.Component {
  render() {
    return (
      <div className="bg-light">
        {renderGroupPicker()}
        {renderSearchBox()}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <ClientList />
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
      <form className="my-4">
        <h4 className="font-weight-bold">Chose your group</h4>
        <br />
        <select className="form-control" id="currentGroup" name="currentGroup">
          <option value="">Pick one</option>
          {[1, 2, 3].map((x) => (
            <option key={x} value={x}>
              {`option ${x}`}
            </option>
          ))}
        </select>
      </form>
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
            placeholder="Search clients"
          />
        </form>
        <div className="px-3">
          <button type="button" className="form-control btn btn-primary">
            Create Client
          </button>
        </div>
      </div>
    </div>
  );
};
