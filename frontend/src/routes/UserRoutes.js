import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TestRoute from "../components/TestRoute";
import Header from "../components/Header";

const UserRoutes = () => {
  return (
    <div>
      <Header />
      <Switch class="container vh-100 d-flex justify-content-center">
        <Route path="/" exact component={TestRoute} />
        <Route path="/groups" exact component={TestRoute} />
        <Route path="/groups/:groupId" exact component={TestRoute} />
        <Route path="/groups/new/:groupId" exact component={TestRoute} />
        <Route path="/groups/:groupId/:clientId" exact component={TestRoute} />
        <Route
          path="/groups/edit/:groupId/:clientId"
          exact
          component={TestRoute}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default UserRoutes;
