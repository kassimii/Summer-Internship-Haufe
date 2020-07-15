import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import TestRoute from './TestRoute';

function App() {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={TestRoute} />
                        <Route
                            path="/groups/:groupId"
                            exact
                            component={TestRoute}
                        />
                        <Route
                            path="/groups/new/:groupId"
                            exact
                            component={TestRoute}
                        />
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
        </div>
    );
}

export default App;
