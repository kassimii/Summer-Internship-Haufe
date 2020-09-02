import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import history from "../history";
import home from "../icons/Home.svg";
import { logout } from "../redux/actions";
import CreateClientModal from "./ClientCreateModal";

const renderCollapsiblePart = (user, handleLogout) => {
  const renderAddClientButton = () => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/clients") {
      return <CreateClientModal />;
    }
  };
  const renderClientRequestSection = () => {
    if (user.isAdmin) {
      return (
        <Link className="nav-link" to="/clients/requests">
          Requests
        </Link>
      );
    }
  };

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
          {user ? (
            <>
              <Link className="nav-link" to="/groups">
                Groups
              </Link>
              <Link className="nav-link" to="/clients">
                Clients
              </Link>

              {renderClientRequestSection()}
              {renderAddClientButton()}
            </>
          ) : null}
        </div>

        <div className="navbar-nav w-100 justify-content-end">
          {user ? (
            <Link to="" className="nav-link" onClick={handleLogout}>
              Log out
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              Log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

const Header = (props) => {
  const handleLogout = () => {
    props.logout();
    history.push("/");
  };
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
      {renderCollapsiblePart(props.user, handleLogout)}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userSignIn.userInfo };
};

export default connect(mapStateToProps, { logout })(Header);
