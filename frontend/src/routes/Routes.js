import React from "react";
import { Router } from "react-router-dom";

import AdminRoutes from "./AdminRoutes";
import NoAuthRoutes from "./NoAuthRoutes";
import UserRoutes from "./UserRoutes";
import history from "../history";

const renderRoutesForUserType = (user) => {
  switch (user) {
    case "user":
      return <UserRoutes />;
    case "admin":
      return <AdminRoutes />;
    default:
      return <NoAuthRoutes />;
  }
};

const Routes = (props) => {
  return (
    <Router history={history}>{renderRoutesForUserType(props.userType)}</Router>
  );
};

export default Routes;
