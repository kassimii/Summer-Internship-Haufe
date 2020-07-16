import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/Header";
import history from "../history";
import TestRoute from "../components/TestRoute";
import LoginPage from "../pages/LoginPage";

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/groups" exact component={TestRoute} />
          <Route path="/groups/:groupId" exact component={TestRoute} />
          <Route path="/groups/new/:groupId" exact component={TestRoute} />
          <Route
            path="/groups/:groupId/:clientId"
            exact
            component={TestRoute}
          />
          <Route
            path="/groups/edit/:groupId/:clientId"
            exact
            component={TestRoute}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
