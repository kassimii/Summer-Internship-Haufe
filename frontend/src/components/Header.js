import React from "react";
import { Link } from "react-router-dom";

import home from "../icons/Home.svg";

const renderCollapsiblePart = () => {
  return (
    <>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        <img
          src={home}
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        Home
      </Link>
      {renderCollapsiblePart()}
    </nav>
  );
};

export default Header;
