import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import TestRoute from "../components/TestRoute";
import Header from "../components/Header";
import GroupsPage from "../pages/GroupsPage";
import GroupPage from "../pages/GroupPage";
import ClientsPage from "../pages/ClientsPage";
import AuthPage from "../pages/AuthPage";

const UserRoutes = () => {
  return (
    <div>
      <Header />
      <Switch class="container vh-100 d-flex justify-content-center">
        <Route path="/" exact component={AuthPage} />
        <Route path="/groups" exact component={GroupsPage} />
        <Route path="/groups/:groupId" exact component={GroupPage} />
        <Route path="/groups/new/:groupId" exact component={TestRoute} />
        <Route path="/groups/:groupId/:clientId" exact component={TestRoute} />
        <Route
          path="/groups/edit/:groupId/:clientId"
          exact
          component={TestRoute}
        />
        <Route path="/clients" exact component={ClientsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default UserRoutes;
