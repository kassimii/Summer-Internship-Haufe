import React from "react";

export default function GroupsPageTab() {
  return (
    <>
      <div className="d-flex justify-content-center m-2 col-mb-6">
        <h4 className="font-weight-bold my-4">Chose your group</h4>
      </div>
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
          {renderCreateGroupModal()}
        </div>
      </div>
    </>
  );
}

const renderCreateGroupModal = () => {
  return (
    <div className="px-3">
      <button type="button" className="form-control btn btn-primary">
        Create Group
      </button>
    </div>
  );
};
