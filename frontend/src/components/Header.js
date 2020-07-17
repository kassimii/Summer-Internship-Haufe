import React from "react";
import { Link } from "react-router-dom";

import home from "../icons/Home.svg";

const renderCollapsiblePart = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <div className="navbar-nav w-100 justify-content-left">
          <Link className="nav-link" to="/groups">
            Groups
          </Link>
        </div>

        <div className="navbar-nav w-100 justify-content-end">
          <Link className="nav-link" to="/">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img
          src={home}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Home
      </Link>
      {renderCollapsiblePart()}
    </nav>
  );
};

export default Header;
