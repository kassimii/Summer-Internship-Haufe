import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "../pages/LoginPage";

const NoAuthRoutes = () => {
  return (
    <Switch class="container vh-100 d-flex justify-content-center">
      <Route path="/" exact component={LoginPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default NoAuthRoutes;
