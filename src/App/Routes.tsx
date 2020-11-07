import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "./domains/Auth";
import Orders from "./domains/Orders";

import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/orders">
          <Orders />
        </PrivateRoute>
        <Route path="*">
          <Redirect to="/auth" />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
